import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ChangePassword } from "../../../../services/operations/auth";
import { Link } from "react-router-dom";



function Changepassword() {
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isSubmitSuccessful
        }
    } = useForm();

    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);
    function onSubmitClick(data) {
        dispatch(ChangePassword(data.oldpassword, data.newpassword, token));
        console.log(data);
    }

    useEffect(() => {
        reset({
            oldpassword: "",
            newpassword: ""
        })
    }, [reset, isSubmitSuccessful])

    return (
        <div className="bg-richblack-800 border-[2px] border-richblack-700 rounded-lg my-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4">
  <div className="text-richblack-25 text-base sm:text-lg font-medium mb-4 pl-1 sm:pl-2">
    Change Password
  </div>

  <form onSubmit={handleSubmit(onSubmitClick)} className="space-y-6">
    {/* Input Fields */}
    <div className="flex flex-col sm:flex-row gap-6">
      {/* Current Password */}
      <div className="flex flex-col flex-1 min-w-0">
        <label htmlFor="oldpassword" className="text-richblack-100 text-sm pb-1">
          Current Password
        </label>
        <input
          type="password"
          id="oldpassword"
          placeholder="*********"
          {...register("oldpassword")}
          className="py-2 px-3 rounded-lg border-b-[2px] border-richblack-600 outline-none bg-transparent text-white text-sm"
        />
      </div>

      {/* New Password */}
      <div className="flex flex-col flex-1 min-w-0">
        <label htmlFor="newpassword" className="text-richblack-100 text-sm pb-1">
          New Password
        </label>
        <input
          type="password"
          id="newpassword"
          placeholder="*********"
          {...register("newpassword")}
          className="py-2 px-3 rounded-lg border-b-[2px] border-richblack-600 outline-none bg-transparent text-white text-sm"
        />
      </div>
    </div>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row-reverse gap-3 mt-2">
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
        //     <div className=" text-richblack-25 py-3 pl-7 text-lg ">Change Password</div>
        //     <form onSubmit={handleSubmit(onSubmitClick)} className=" px-7">
        //         <div className="flex justify-between gap-7">
        //             <div className="flex flex-col w-[50%]">
        //                 <label htmlFor="oldpassword" className=" text-richblack-100 pb-1">Current Password</label>
        //                 <input type="password" name="oldpassword" id="oldpassword" className=" py-2 rounded-lg px-2 outline-none border-b-[2px] border-richblack-600"
        //                     {...register("oldpassword")}
        //                     placeholder="*********"  />
        //             </div>
        //             <div className="flex flex-col w-[50%]">
        //                 <label htmlFor="newpassword" className=" text-richblack-100 pb-1">New Password</label>
        //                 <input type="password" name="newpassword" id="newpassword" className=" py-2 rounded-lg px-2 outline-none border-b-[2px] border-richblack-600"
        //                     {...register("newpassword")} 
        //                     placeholder="*********" />
        //             </div>
        //         </div>
        //         <div className="flex justify-start my-3 gap-3 flex-row-reverse">
        //             <button type="submit" className=" py-2 px-3 bg-yellow-100 text-richblack-900 font-semibold rounded-md">Save</button>
        //             <Link to={'/dashboard/my-profile'}>
        //                 <button type="button"  className=" py-2 px-3 bg-richblack-700 rounded-md">Cancel</button>
        //             </Link>
        //         </div>
        //     </form>
        // </div>
    )
}

export default Changepassword;