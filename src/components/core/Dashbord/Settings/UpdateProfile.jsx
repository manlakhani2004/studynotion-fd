import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateProfile } from "../../../../services/operations/profile";
import { setUser } from "../../../../slice/profileSlice";

function UpdateProfile() {
    const { user, } = useSelector((state) => state.profile);
    const { token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const {
        register,
        reset,
        handleSubmit,
        setValue,
        formState: {
            errors,
            isSubmitSuccessful
        }
    } = useForm();

    function onProfileFormSubmit(data) {
        // console.log(data);
        // console.log(user);
        dispatch(updateProfile(data.dateOfBirth, data.about, data.gender, data.contactNumber, token))
    }

    useEffect(() => {
       
        // setValue("firstName",user.firstName,{ shouldValidate: true });
        // setValue("lastName",user.lastName);
        // setValue("dateOfBirth",user.additionalDetails.dateOfBirth);
        // setValue("gender",user.additionalDetails.gender);
        // setValue("contactNumber",user.additionalDetails.contactNumber);

        reset({
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            gender: "",
            contactNumber: "",
            about: ""
        });
    }, [reset, isSubmitSuccessful]);

    return (
        <div className="bg-richblack-800 border-2 border-richblack-700 rounded-lg my-4 px-4 sm:px-6 md:px-8 py-5">
  <div className="text-richblack-25 text-base sm:text-lg font-medium mb-4">Profile Information</div>

  <form onSubmit={handleSubmit(onProfileFormSubmit)} className="space-y-6">
    {/* Row 1: First Name & Last Name */}
    <div className="flex flex-col sm:flex-row gap-6">
      <div className="flex flex-col flex-1 min-w-0">
        <label htmlFor="firstName" className="text-richblack-100 text-sm pb-1">First Name</label>
        <input
          type="text"
          id="firstName"
          placeholder="FirstName"
          defaultValue={user?.firstName}
          {...register("firstName", { required: true })}
          className="py-2 px-3 rounded-lg border-b-2 border-richblack-600 outline-none bg-transparent text-white text-sm"
        />
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <label htmlFor="lastName" className="text-richblack-100 text-sm pb-1">Last Name</label>
        <input
          type="text"
          id="lastName"
          placeholder="LastName"
          defaultValue={user?.lastName}
          {...register("lastName")}
          className="py-2 px-3 rounded-lg border-b-2 border-richblack-600 outline-none bg-transparent text-white text-sm"
        />
      </div>
    </div>

    {/* Row 2: DOB & Gender */}
    <div className="flex flex-col sm:flex-row gap-6">
      <div className="flex flex-col flex-1 min-w-0">
        <label htmlFor="dateOfBirth" className="text-richblack-100 text-sm pb-1">Date of Birth</label>
        <input
          type="date"
          id="dateOfBirth"
          defaultValue={user?.additionalDetails?.dateOfBirth}
          {...register("dateOfBirth")}
          className="py-2 px-3 rounded-lg border-b-2 border-richblack-600 outline-none bg-transparent text-white text-sm"
        />
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <label htmlFor="gender" className="text-richblack-100 text-sm pb-1">Gender</label>
        <select
          id="gender"
          defaultValue={user?.additionalDetails?.gender}
          {...register("gender")}
          className="py-2 px-3 rounded-lg border-b-2 border-richblack-600 bg-richblack-700 outline-none text-white text-sm"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
      </div>
    </div>

    {/* Row 3: Contact & About */}
    <div className="flex flex-col sm:flex-row gap-6">
      <div className="flex flex-col flex-1 min-w-0">
        <label htmlFor="contactNumber" className="text-richblack-100 text-sm pb-1">Contact Number</label>
        <input
          type="text"
          id="contactNumber"
          placeholder="Contact Number"
          defaultValue={user?.additionalDetails?.contactNumber}
          {...register("contactNumber")}
          className="py-2 px-3 rounded-lg border-b-2 border-richblack-600 outline-none bg-transparent text-white text-sm"
        />
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <label htmlFor="about" className="text-richblack-100 text-sm pb-1">About</label>
        <input
          type="text"
          id="about"
          placeholder="About"
          defaultValue={user?.additionalDetails?.about}
          {...register("about")}
          className="py-2 px-3 rounded-lg border-b-2 border-richblack-600 outline-none bg-transparent text-white text-sm"
        />
      </div>
    </div>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row-reverse gap-3 mt-4">
      <button
        type="submit"
        className="py-2 px-4 bg-yellow-100 text-richblack-900 font-semibold rounded-md text-sm"
      >
        Save
      </button>
      <Link to="/dashboard/my-profile">
        <button
          type="button"
          className="py-2 px-4 bg-richblack-700 text-white rounded-md text-sm"
        >
          Cancel
        </button>
      </Link>
    </div>
  </form>
</div>

        // <div className=" bg-richblack-800 border-[2px] my-4 rounded-lg border-richblack-700">
        //     <div className=" text-richblack-25 py-3 pl-7 text-lg ">Profile Information</div>
        //     <form onSubmit={handleSubmit(onProfileFormSubmit)} className=" px-7">
        //         <div className="flex justify-between gap-7">
        //             <div className="flex flex-col w-[50%]">
        //                 <label htmlFor="firstName" className=" text-richblack-100 pb-1">First Name</label>
        //                 <input type="text" name="firstName" id="firstName" className=" py-2 rounded-lg px-2 outline-none border-b-[2px] border-richblack-600"
        //                     {...register("firstName",{required:true})}
        //                     placeholder="FirstName"
        //                     defaultValue={user?.firstName}
        //                 />
        //             </div>
        //             <div className="flex flex-col w-[50%]">
        //                 <label htmlFor="lastName" className=" text-richblack-100 pb-1">Last Name</label>
        //                 <input type="text" name="lastName" id="lastName" className=" py-2 rounded-lg px-2 outline-none  border-b-[2px] border-richblack-600"
        //                     {...register("lastName")}
        //                     placeholder="LastName"
        //                     defaultValue={user?.lastName}
        //                 />
        //             </div>
        //         </div>
        //         <div className="flex justify-between gap-7 mt-3">
        //             <div className="flex flex-col w-[50%]" >
        //                 <label htmlFor="dateOfBirth" className=" text-richblack-100 pb-1">Date of Birth</label>
        //                 <input type="date" name="dateOfBirth" id="dateOfBirth" className=" py-2 rounded-lg px-2 outline-none border-b-[2px] border-richblack-600"
        //                     {...register("dateOfBirth")}
        //                     defaultValue={user?.additionalDetails?.dateOfBirth}
        //                 />
        //             </div>
        //             <div className="flex flex-col w-[50%]"  >
        //                 <label htmlFor="Gender" className=" text-richblack-100 pb-1">Gender</label>
        //                 <select name="gender" id="gender" {...register("gender")} className=" py-[11px] rounded-lg px-2 bg-richblack-700 outline-none border-b-[2px] border-richblack-600"
        //                     defaultValue={user?.additionalDetails?.gender}
        
        //                 >
        //                     <option className=" py-3 text-lg px-2 " value="Male" defaultChecked>Male</option>
        //                     <option className=" py-3 text-lg px-2 " value={"Female"}>Female</option>
        //                     <option className=" py-3 text-lg px-2 " value={"Others"}>Others</option>
        //                 </select>
        //             </div>
        //         </div>
        //         <div className="flex justify-between gap-7 mt-3">
        //             <div className="flex flex-col w-[50%]">
        //                 <label htmlFor="coontactNumber" className=" text-richblack-100 pb-1">Contact Number</label>
        //                 <input type="text" name="contactNumber" id="contactNumber" className=" py-2 rounded-lg px-2 outline-none border-b-[2px] border-richblack-600"
        //                     {...register("contactNumber")}
        //                     placeholder="Contact Number"
        //                     defaultValue={user?.additionalDetails?.contactNumber} />
        //             </div>
        //             <div className="flex flex-col w-[50%]">
        //                 <label htmlFor="About" className=" text-richblack-100 pb-1">
        //                     About
        //                 </label>
        //                 <input type="text" name="about" id="About" className=" py-2 rounded-lg px-2 outline-none border-b-[2px] border-richblack-600"
        //                     {...register("about")}
        //                     defaultValue={user?.additionalDetails.about}
        //                     placeholder="About"
        //                 />
        //             </div>
        //         </div>

        //         <div className="flex justify-start my-3 gap-3 flex-row-reverse">
        //             <button type="submit" className=" py-2 px-3 bg-yellow-100 text-richblack-900 font-semibold rounded-md">Save</button>
        //             <Link to={'/dashboard/my-profile'}>
        //                 <button type="button" className=" py-2 px-3 bg-richblack-700 rounded-md">Cancel</button>
        //             </Link>
        //         </div>
        //     </form>
        // </div>
    )
}

export default UpdateProfile;