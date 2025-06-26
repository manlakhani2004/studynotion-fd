


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiConnector } from "../services/apiConnector";
import { CatalogAPI } from "../services/apis";
import { getCategoryPageDetails } from "../services/operations/catalogData";
import Course_card from "../components/core/Catalog page/Course_card";
import CourseSlider from "../components/core/Catalog page/CourseSlider";

function Catalog() {
    const { catalogName } = useParams();
    const [categoryPageData, setCategoryPageData] = useState(null);
    const [categoryId, setCategoryId] = useState('');
      const [active, setActive] = useState(1)
    useEffect(() => {
        async function getAllCategory() {
            const res = await apiConnector('GET', CatalogAPI.SHOWALLCATEGORY);
            // console.log("res data:",res);

            // console.log(res.data.AllCategorys.filter((cat)=>cat.name === "AI/ML")[0]._id);
            const categoryid = res?.data?.AllCategorys?.filter((ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName);
            // console.log(categoryid[0].);
            // console.log(categoryid[0]._id);
            setCategoryId(categoryid[0]._id);

        }
        getAllCategory();
    }, [catalogName]);

    useEffect(() => {
        async function getCategorypageData() {
            const res = await getCategoryPageDetails(categoryId);
            setCategoryPageData(res);
            console.log("coureses:", res);
        }
        if (categoryId) {
            getCategorypageData();
        }
    }, [categoryId]);


    return (
        <div className="text-white">
  {/* Top Category Info */}
  <div className="box-content bg-richblack-800 px-4 sm:px-6 md:px-8">
    <div className="mx-auto flex min-h-[260px] max-w-[95%] flex-col justify-center gap-4 sm:max-w-[90%] lg:max-w-maxContent">
      <p className="text-xs sm:text-sm text-richblack-300">
        Home / Catalog /{" "}
        <span className="text-yellow-25">
          {categoryPageData?.selectedCategory?.name}
        </span>
      </p>
      <p className="text-2xl sm:text-3xl text-richblack-5">
        {categoryPageData?.selectedCategory?.name}
      </p>
      <p className="text-sm sm:text-base max-w-full sm:max-w-[700px] md:max-w-[870px] text-richblack-200">
        {categoryPageData?.selectedCategory?.description}
      </p>
    </div>
  </div>

  {/* Section 1 - Courses to get you started */}
  <div className="mx-auto box-content w-full max-w-[95%] px-4 sm:px-6 md:px-8 py-10 sm:py-12 lg:max-w-maxContent">
    <div className="section_heading text-2xl sm:text-3xl text-richblack-5">
      Courses to get you started
    </div>
    <div className="my-4 flex flex-wrap gap-x-2 border-b border-b-richblack-600 text-sm">
      <p
        className={`px-3 py-2 sm:px-4 sm:py-2 ${
          active === 1
            ? "border-b border-b-yellow-25 text-yellow-25"
            : "text-richblack-50"
        } cursor-pointer`}
        onClick={() => setActive(1)}
      >
        Most Popular
      </p>
      <p
        className={`px-3 py-2 sm:px-4 sm:py-2 ${
          active === 2
            ? "border-b border-b-yellow-25 text-yellow-25"
            : "text-richblack-50"
        } cursor-pointer`}
        onClick={() => setActive(2)}
      >
        New
      </p>
    </div>
    <CourseSlider courses={categoryPageData?.selectedCategory?.courses} />
  </div>

  {/* Section 2 - Top Courses */}
  <div className="mx-auto box-content w-full max-w-[95%] px-4 sm:px-6 md:px-8 py-10 sm:py-12 lg:max-w-maxContent">
    <div className="section_heading text-2xl sm:text-3xl text-richblack-5">
      Top courses in {categoryPageData?.differentCategory?.name}
    </div>
    <div className="py-6 sm:py-8">
      <CourseSlider courses={categoryPageData?.differentCategory?.courses} />
    </div>
  </div>

  {/* Section 3 - Frequently Bought */}
  <div className="mx-auto box-content w-full max-w-[95%] px-4 sm:px-6 md:px-8 py-10 sm:py-12 lg:max-w-maxContent">
    <div className="section_heading text-2xl sm:text-3xl text-richblack-5">
      Frequently Bought
    </div>
    <div className="py-6 sm:py-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {categoryPageData?.mostSellingCourses?.slice(0, 4).map((course) => (
          <Course_card course={course} key={course._id} height="h-[400px]" />
        ))}
      </div>
    </div>
  </div>
</div>

        // <>
        // <div className=" text-white">
        //     <div className="box-content bg-richblack-800 px-4 text-white">
        //         <div className="mx-auto flex min-h-[260px] max-w-maxContentTab flex-col justify-center gap-4 lg:max-w-maxContent">
        //             <p className="text-sm text-richblack-300">
        //                 Home / Catalog / <span className="text-yellow-25">{categoryPageData?.selectedCategory?.name}</span>
        //             </p>
        //             <p className="text-3xl text-richblack-5">
        //                 {categoryPageData?.selectedCategory?.name}
        //             </p>
        //             <p className="max-w-[870px] text-richblack-200">
        //                 {categoryPageData?.selectedCategory?.description}
        //             </p>
        //         </div>
        //     </div>

        //     {/* Section 1 - Courses to get you started */}
        //     <div className="mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
        //         <div className="section_heading  text-3xl text-richblack-5">Courses to get you started</div>
        //         <div className="my-4 flex border-b border-b-richblack-600 text-sm">
        //             <p
        //                 className={`px-4 py-2 ${active === 1 ? "border-b border-b-yellow-25 text-yellow-25" : "text-richblack-50"} cursor-pointer`}
        //                 onClick={() => setActive(1)}
        //             >
        //                 Most Popular
        //             </p>
        //             <p
        //                 className={`px-4 py-2 ${active === 2 ? "border-b border-b-yellow-25 text-yellow-25" : "text-richblack-50"} cursor-pointer`}
        //                 onClick={() => setActive(2)}
        //             >
        //                 New
        //             </p>
        //         </div>
        //         <div>
        //             <CourseSlider courses={categoryPageData?.selectedCategory?.courses} />
        //         </div>
        //     </div>

        //     {/* Section 2 - Top Courses */}
        //     <div className="mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
        //         <div className="section_heading text-3xl text-richblack-5">
        //             Top courses in {categoryPageData?.differentCategory?.name}
        //         </div>
        //         <div className="py-8">
        //             <CourseSlider courses={categoryPageData?.differentCategory?.courses} />
        //         </div>
        //     </div>

        //     {/* Section 3 - Frequently Bought */}
        //     <div className="mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
        //         <div className="section_heading text-3xl text-richblack-5">Frequently Bought</div>
        //         <div className="py-8">
        //             <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        //                 {categoryPageData?.mostSellingCourses?.slice(0, 4).map((course, i) => (
        //                     <Course_card course={course} key={course._id} height="h-[400px]" />
        //                 ))}
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // </>
    )
    // return(
    //     <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">

    //         <div>
    //             <p>Home/catalog/{`${categoryPageData?.selectedCategory?.name}`}</p>
    //             <p>{categoryPageData?.selectedCategory?.name}</p>
    //             <p>{categoryPageData?.selectedCategory?.description}</p>
    //         </div>
    //         {/* section 1  */}
    //         {/* related course  */}
    //         <div>
    //             <h1>Course to get you started</h1>
    //             <div>
    //             <CourseSlider courses={categoryPageData?.selectedCategory?.courses} />
    //             </div>
    //         </div>
    //         {/* section 2 */}
    //         {/* top courses */}
    //         <div>
    //             <h1>Top Courses</h1>
    //             <div>
    //                 <CourseSlider courses={categoryPageData?.differentCategory?.courses}/>
    //             </div>
    //         </div>

    //         {/* section 3  */}
    //         <div>
    //             <h1>Frequently Bought</h1>
    //             <div className="flex gap-3 ">
    //                 {
    //                     categoryPageData?.mostSellingCourses?.slice(0,4).map((course)=>(

    //                         <Course_card course={course} height="h-[400px]"  key={course._id}/>

    //                     ))
    //                 }
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default Catalog;