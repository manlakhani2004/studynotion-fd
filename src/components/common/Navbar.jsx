import React, { useEffect, useState } from "react";
import { NavbarLinks } from "../../data/navbar-links";
import navimg from '../../assets/Logo/Logo-Full-Light.png'
import { Link, matchPath, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RiShoppingCart2Line } from "react-icons/ri";
import ProfileDropDown from "../core/Auth/ProfileDropDown";
import { apiConnector } from "../../services/apiConnector";
import { categories } from "../../services/apis";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
    const location = useLocation();
    const [subLinks, setSubLinks] = useState([]);

    async function fetchSubLinks() {
        try {
            const result = await apiConnector("GET", categories.CATEGORIES_API);
            setSubLinks(result);
            // console.log("printing sublink",result);
            // console.log(subLinks);
        } catch (error) {
            console.log("error while call categories", error);
        }
    }

    useEffect(() => {
        fetchSubLinks();
    }, [])

    function matchRoute(linkPath) {
        return matchPath({ path: linkPath }, location.pathname)
    }

    const { totalItems } = useSelector((state) => state.cart);
    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    return (
        <div className="border-b-2 border-richblack-700 bg-richblack-900">
  <div className="flex flex-wrap md:flex-nowrap justify-between items-center w-[95%] max-w-[1400px] mx-auto pt-3 pb-2 gap-y-4">
    
    {/* img logo */}
    <div className="w-[120px] sm:w-[140px] md:w-[160px]">
      <img src={navimg} alt="logo" className="w-full" />
    </div>

    {/* nav tab */}
    <div className="flex flex-wrap gap-3 sm:gap-4 text-white items-center text-sm sm:text-base justify-center sm:justify-start">
      {
        NavbarLinks.map((link, index) => (
          <div key={index}>
            {
              link.title === "Catalog" ? (
                <div className="relative group">
                  <div className="flex gap-1 items-center cursor-pointer">
                    <p>{link.title}</p>
                    <IoIosArrowDown />
                  </div>
                  <div className="absolute -right-[75px] top-10 bg-richblack-5 text-richblack-800 w-[240px] py-3 z-50 hidden group-hover:block rounded-md shadow-md">
                    <div className="h-6 w-6 rotate-45 bg-richblack-5 absolute right-[34%] -top-3 z-[-1]"></div>
                    {
                      subLinks.length !== 0 ? (
                        subLinks.data.AllCategorys.map((category) => (
                          <div
                            key={category._id}
                            className="mx-3 px-3 py-2 text-sm text-start text-richblack-900 hover:bg-richblack-25 rounded-lg"
                          >
                            <Link to={`/catalog/${category.name.split(" ").join("-").toLowerCase()}`}>
                              <p className="font-medium">{category.name}</p>
                            </Link>
                          </div>
                        ))
                      ) : (
                        <p className="text-white text-sm">loading please wait!</p>
                      )
                    }
                  </div>
                </div>
              ) : (
                <Link to={link.path}>
                  <p className={`${matchRoute(link.path) ? "text-yellow-25" : "text-white"} hover:text-yellow-50`}>
                    {link.title}
                  </p>
                </Link>
              )
            }
          </div>
        ))
      }
    </div>

    {/* login or profile */}
    <div className="flex gap-4 md:gap-7 items-center text-white text-sm sm:text-base">
      {
        user && user.accountType !== "Instructor" && (
          <div className="text-xl relative">
            <Link to={'/dashboard/cart'}>
              <RiShoppingCart2Line />
              {
                totalItems > 0 && (
                  <span className="absolute text-xs px-1 right-0 bg-[#006A4E] rounded-full -bottom-2">
                    {totalItems}
                  </span>
                )
              }
            </Link>
          </div>
        )
      }
      {
        token !== null ? (
          <ProfileDropDown />
        ) : (
          <>
            <Link to={'/login'}>
              <button className="border border-richblack-700 bg-richblack-800 px-3 py-2 text-richblack-100 rounded-md">
                Login
              </button>
            </Link>
            <Link to={'/signup'}>
              <button className="border border-richblack-700 bg-richblack-800 px-3 py-2 text-richblack-100 rounded-md">
                Signup
              </button>
            </Link>
          </>
        )
      }
    </div>
  </div>
</div>

        // <div className=" border-b-2 border-richblack-700 bg-richblack-900">
        //     <div className="flex justify-between w-11/12 mx-auto pt-3 pb-2 ">
        //         {/* img logo  */}
        //         <div>
        //             <img src={navimg} alt="" />
        //         </div>
        //         {/* nav tab  */}
        //         <div className=" flex gap-4 text-white items-center">
        //             {
        //                 NavbarLinks.map((link, index) => (
        //                     <div key={index} className="" >
        //                         {
        //                             (link.title === "Catalog") ? (
        //                                 <div className=" relative group">
        //                                     <div className=" flex gap-1 items-center">
        //                                         <p>{link.title}</p>
        //                                         <IoIosArrowDown />
        //                                     </div>
        //                                     <div className=" absolute  -right-[75px] top-10 bg-richblack-5 text-richblack-800 w-[240px] py-3 z-50 hidden transition-all duration-200 rounded-md group-hover:block ">
        //                                         <div className=" h-6 w-6 rotate-45  z-[-10] bg-richblack-5 absolute right-[34%] -top-3"></div>
        //                                         {
        //                                             (subLinks.length !== 0) ? (
        //                                                 subLinks.data.AllCategorys.map((category) => (
        //                                                     <div key={category._id} className=" mx-3 px-3 rounded-lg text-start py-2 text-richblack-900 hover:bg-richblack-25 text-sm">
        //                                                         <Link to={`/catalog/${category.name.split(" ")
        //                                                             .join("-")
        //                                                             .toLowerCase()}`}>
        //                                                             <p className=" font-medium">{category.name}</p>
        //                                                         </Link>
        //                                                     </div>
        //                                                 ))) : (
        //                                                 <p className=" text-white">loading please wait!</p>
        //                                             )
        //                                         }
        //                                     </div>
        //                                 </div>
        //                             ) : (
        //                                 <Link to={link.path}>
        //                                     <p className={`${matchRoute(link.path) ? " text-yellow-25" : " text-white"}`}>
        //                                         {link.title}
        //                                     </p>
        //                                 </Link>
        //                             )
        //                         }
        //                     </div>
        //                 ))
        //             }

        //         </div>
        //         {/* login or profile */}
        //         <div className=" text-white flex gap-7 items-center">
        //             {
        //                 user && user.accountType !== "Instructor" && (
        //                     <div className=" text-2xl relative">
        //                         <Link to={'/dashboard/cart'}>
        //                             <RiShoppingCart2Line />
        //                             {
        //                                 totalItems > 0 && (
        //                                     <span className=" absolute text-sm px-1 right-1 bg-[#006A4E] rounded-full bottom-5  ">
        //                                         {totalItems}
        //                                     </span>
        //                                 )
        //                             }
        //                         </Link>
        //                     </div>
        //                 )
        //             }
        //             {
        //                 token !== null && (
        //                     <div>
        //                         <ProfileDropDown />
        //                     </div>
        //                 )
        //             }
        //             {
        //                 token == null && (
        //                     <Link to={'/login'}>
        //                         <button className=" border border-richblack-700 bg-richblack-800 px-[12px] py-[8px]  text-richblack-100 rounded-md">
        //                             login
        //                         </button>
        //                     </Link>
        //                 )
        //             }                    {
        //                 token == null && (
        //                     <Link to={'/signup'}>
        //                         <button className=" ml-2 border border-richblack-700 bg-richblack-800 px-[12px] py-[8px]  text-richblack-100 rounded-md">
        //                             signup
        //                         </button>
        //                     </Link>
        //                 )
        //             }
        //         </div>
        //     </div>

        // </div>
        )
}

export default Navbar;