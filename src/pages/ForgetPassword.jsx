import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getpasswordResetToken } from "../services/operations/auth";
import { FaArrowLeftLong } from "react-icons/fa6";
import toast from "react-hot-toast";
function ForgetPassword() {
    const [sendEmail, setSendEmail] = useState(false);
    const [email, setEmail] = useState('');
    const { loading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    function submitHandler(e) {
        toast.success("submited");
        e.preventDefault();
        dispatch(getpasswordResetToken(email, setSendEmail));
    }

    return (
        <div>
            {
                (loading) ? (
                    <div class="spinner"></div>
                ) : (
                    <div className=" text-white flex justify-center items-center mt-[13%] w-[25%] mx-auto  h-full">
                        {
                            (!sendEmail) ? (
                                <div className="flex flex-col gap-2">
                                    <h1 className=" text-2xl font-semibold">Reset your password</h1>
                                    <p className=" text-richblack-100">Have no fear. We’ll email you instructions to reset your passwid. If you dont have access to your email we can try account recovery</p>
                                    <form onSubmit={submitHandler}>
                                        <div className="flex flex-col gap-1 mt-2">
                                            <label className=" text-base text-richblack-200">Email Address <span className="">*</span></label>
                                            <input className=" py-2 px-2 rounded-lg" placeholder="myemailaddress@gmail.com"
                                                type="email" name="uemail" id="" onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        <br />
                                        <button type="submit" className=" py-2 px-2 bg-yellow-100  w-full rounded-lg text-black" >Reset Passsword</button>
                                    </form>
                                    <div>
                                        <Link to={'/login'} className="flex gap-2 items-center">
                                            <FaArrowLeftLong />
                                            Back to Login
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-3" >
                                    <h1 className=" text-2xl font-semibold">Check email</h1>
                                    <p className=" text-richblack-100">{`We have sent the reset email to your ${email}`}</p>
                                    <form onSubmit={submitHandler}>
                                        <button type="submit" className=" py-2 px-2 bg-yellow-100  w-full rounded-lg text-black">Resend Email</button>
                                    </form>
                                    <div>
                                        <Link to={'/login'} className="flex gap-2 items-center">
                                            <FaArrowLeftLong />
                                            Back to Login
                                        </Link>
                                    </div>
                                </div>
                            )

                        }

                    </div>
                )
            }
        </div>
    )
}
export default ForgetPassword;