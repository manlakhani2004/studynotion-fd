import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";

function MyProfile() {
    const { user } = useSelector((state) => state.profile);
    // console.log(user);
    return (
        <div className=" bg-richblack-900">
            <h1 className=" text-3xl font-medium  ml-14 my-6">My Profile</h1>
            <div className=" ml-14">

                {/* profile  */}
                <div className="flex justify-between items-center bg-richblack-800 border-2 border-richblack-700 py-4 px-5 rounded-lg w-[60vw]">
                    <div className="flex gap-4">
                        
                        <img
                            src={user.image}
                            alt={`profile-${user?.firstName}`}
                            className="aspect-square w-[78px] rounded-full object-cover"
                        />
                        <div>
                            <p className=" text-xl">{user.firstName} {user.lastName}</p>
                            <p className=" text-richblack-200">{user.email}</p>
                        </div>
                    </div>
                    <Link to={'/dashboard/settings'} className="flex gap-2 items-center justify-center rounded-lg py-2 px-2 bg-yellow-100 text-black">
                        <FiEdit />
                        <p>Edit</p>
                    </Link>
                </div>

                {/* About  */}
                <div className="flex flex-col gap-3  py-4 px-5 bg-richblack-800 my-5 rounded-lg border-2 border-richblack-700">
                    <div className="flex justify-between">
                        <p className=" text-lg text-richblack-25">About</p>
                        <Link to={'/dashboard/settings'} className="flex gap-2 items-center justify-center rounded-lg py-2 px-2 bg-yellow-100 text-black">
                            <FiEdit />
                            <p>Edit</p>
                        </Link>
                    </div>

                    <div className=" my-3">
                        <p className=" text-richblack-200">{
                            user.additionalDetails.about ? `${user.additionalDetails.about}` : "Write Somthings About Yourselft"
                        }</p>
                    </div>
                </div>

                {/* personal details  */}

                <div className="flex flex-col gap-3  py-4 px-5 bg-richblack-800 my-5 rounded-lg border-2 border-richblack-700">
                    <div className="flex justify-between">
                        <p className=" text-lg text-richblack-25">Personal Details</p>
                        <Link to={'/dashboard/settings'} className="flex gap-2 items-center justify-center rounded-lg py-2 px-2 bg-yellow-100 text-black">
                            <FiEdit />
                            <p>Edit</p>
                        </Link>
                    </div>


                    <div className=" w-[70%]" >
                        <div className="flex justify-between mr-[70px] my-3">
                            <div>
                                <p className=" text-richblack-200">First Name</p>
                                <p>{user.firstName}</p>
                            </div>
                            <div>
                                <p className=" text-richblack-200">Last Name</p>
                                <p>{user.lastName}</p>
                            </div>
                        </div>
                        <div className=" flex justify-between my-3">
                            <div className=" w-[50%]">
                                <p className=" text-richblack-200">Email</p>
                                <p>{user.email}</p>
                            </div>
                            <div className=" w-[24%]">
                                <p className=" text-richblack-200">Contacts</p>
                                <p>{
                                    (user.additionalDetails.contactNumber) ?
                                    `${user.additionalDetails.contactNumber}` : "Add Contact Number"
                                }</p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}
export default MyProfile;