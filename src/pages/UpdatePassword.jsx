import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatepassword } from "../services/operations/auth";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi"
function UpdatePassword() {
    const [formdata, setFormdata] = useState({
        password: "",
        confirmPassword: ""
    });
    const [ResetComplete,setResetComplete] = useState(false);
    const { loading } = useSelector((state) => state.auth);
    const { password, confirmPassword } = formdata;
    const location = useLocation();
    const dispatch = useDispatch();
    const token = location.pathname.split('/').at(-1);

    function changeHandler(e) {
        setFormdata((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    function submitHandler(e) {
        e.preventDefault();
        dispatch(updatepassword(password, confirmPassword, token))
    }

    return (
        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
  {loading ? (
    <div className="spinner"></div>
  ) : (
    <div className="max-w-[500px] p-4 lg:p-8 text-white">
      <div>
        <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
          Choose new password
        </h1>
        <p className="my-4 text-[1.125rem] leading-[1.625rem] text-richblack-100">
          Almost done. Enter your new password and you're all set.
        </p>
      </div>
      <div>
        <form onSubmit={submitHandler}>
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              New Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="password"
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              className="form-style w-full !pr-10 py-2"
            />
          </label>
          <label className="relative mt-3 block">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Confirm New Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="password"
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              className="form-style w-full !pr-10 py-2"
            />
          </label>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-richblack-100">
            <div>
              <p>• One lowercase character</p>
              <p>• One uppercase character</p>
              <p>• One number</p>
            </div>
            <div>
              <p>• One special character</p>
              <p>• 8 character minimum</p>
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900"
          >
            Reset Password
          </button>
        </form>
        <div className="mt-6 flex items-center justify-between">
          <Link to="/login">
            <p className="flex items-center gap-x-2 text-richblack-5">
              <BiArrowBack /> Back to Login
            </p>
          </Link>
        </div>
      </div>
    </div>
  )}
</div>

        // <div>
        //     {
        //         (loading) ? (
        //             <div className="spinner"></div>
        //         ) : (
        //             <div className="text-white">
        //                 <div>
        //                     <h1>Choose  new password</h1>
        //                     <p>Almost done. Enter your new password and youre all set.</p>
        //                 </div>
        //                 <div>
        //                     <form onSubmit={submitHandler} >
        //                         <div>
        //                             <label > New Password</label>
        //                             <input type="email" name="password" onChange={changeHandler} />
        //                         </div>
        //                         <div>
        //                             <label > Confirm Password</label>
        //                             <input type="email" name="confirmPassword" onChange={changeHandler} />
        //                         </div>
        //                         <div>
        //                             <div>
        //                                 <p>one lowercase character</p>
        //                                 <p>one uppercase character</p>
        //                                 <p>one number</p>
        //                             </div>
        //                             <div>
        //                                 <p>one special character</p>
        //                                 <p>8 character minimum</p>
        //                             </div>
        //                         </div>
        //                         <button type="submit">Reset Password</button>
        //                     </form>
        //                     <div>
        //                         <Link to={'/login'}>
        //                             Back to Login</Link>
        //                     </div>
        //                 </div>
        //             </div>
        //         )
        //     }
        // </div>

    )
}
export default UpdatePassword;