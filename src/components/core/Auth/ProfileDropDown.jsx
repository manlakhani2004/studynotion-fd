import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {Logout} from "../../../services/operations/auth";
function ProfileDropDown() {
    let user = JSON.parse(localStorage.getItem("user"));
    const [showProfile, setShowProfile] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // console.log(user.image);

    function logoutHandler(e){
        dispatch(Logout(navigate));
    }

    return (
        <div className=" relative mr-5">
            <div className=" group">
                {/* <img src={`${user.image}`} height={40} width={40} className=" rounded-full "  /> */}
                <img
                    src={user.image}
                    alt={`profile-${user?.firstName}`}
                    className="aspect-square w-[50px] rounded-full object-cover cursor-pointer"
                    onClick={() => setShowProfile((prev) => !prev)}
                />
            </div>

            <div className={` ${(showProfile) ? " block" : "hidden"} border-2 cursor-pointer  border-richblack-400 absolute rounded-md px-3 py-4  -right-12  mt-1  flex flex-col gap-2 justify-center items-center bg-richblack-700 text-white text-base`}>
                <div className=" bg-richblack-800 px-3 py-2 rounded-lg" onClick={() => setShowProfile((prev) => !prev)}  >
                    <Link to={'/dashboard/my-profile'}>
                        Dashboard
                    </Link>
                </div>
                <div className=" bg-richblack-800 px-7 py-2 rounded-lg cursor-pointer" onClick={()=>{
                    logoutHandler()
                    setShowProfile((prev) => !prev)
                }} > 
                        Logout
                </div>
            </div>
        </div>
    )
}

export default ProfileDropDown;