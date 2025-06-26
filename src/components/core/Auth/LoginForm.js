import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { type } from "@testing-library/user-event/dist/type";
import {Login} from "../../../services/operations/auth"
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../../slice/authSlice";


function LoginForm() {

    const dispatch = useDispatch();

    const {token,loading} = useSelector((state)=>state.auth);

    let navigate = useNavigate();

    const[formdata,setformdata] = useState({
        email:'',
        password:''
    })
    
    function Storeformdetails(event)
    {
        setformdata((previousvalue)=>
        {
            return{
                ...previousvalue,
                [event.target.name]:event.target.value
            }
        })
    }

    function changehandler(e)
    {
        e.preventDefault();
        if(formdata.email.length >= 3 && formdata.password.length >=5)
        {

            dispatch(Login(formdata.email,formdata.password,navigate));
            
            navigate('/');
            toast.success("submited");
        }
        else
        {
            toast.error("Password must have 5 latter")
        }
        console.log("printing login data...")
        console.log(formdata);

    }

    return(
        <div className="mt-4 w-full">
  <form className="flex flex-col w-full">
    {/* Email Field */}
    <div className="flex flex-col mb-3 w-full">
      <label className="text-white text-sm sm:text-base md:text-md lg:text-lg">
        Email Address <span className="text-red-600 text-lg">*</span>
      </label>
      <input
        type="email"
        name="email"
        onChange={Storeformdetails}
        value={formdata.email}
        placeholder="Enter Your Email"
        className="bg-gray-600 py-2 px-4 rounded-md placeholder:text-gray-300 text-white w-full sm:w-[95%]"
      />
    </div>

    {/* Password Field */}
    <div className="flex flex-col mb-6 w-full">
      <label className="text-white text-sm sm:text-base md:text-md lg:text-lg">
        Password <span className="text-red-600 text-lg">*</span>
      </label>
      <input
        type="password"
        name="password"
        onChange={Storeformdetails}
        value={formdata.password}
        placeholder="Enter password"
        className="bg-gray-600 py-2 px-4 rounded-md placeholder:text-gray-300 text-white w-full sm:w-[95%]"
      />
      <span className="text-xs sm:text-sm text-blue-400 flex justify-end pr-2 sm:pr-6 pt-1">
        <Link to="/forget-password">Forget Password</Link>
      </span>
    </div>

    {/* Login Button */}
    <button
      onClick={changehandler}
      className="bg-yellow-400 py-2 px-4 rounded-md text-sm sm:text-base w-full sm:w-[95%]"
    >
      Login
    </button>
  </form>
</div>

    // <div className="mt-4">
    //     <form className="flex flex-col">
    //         <div className="flex flex-col mb-3">
    //         <label className="text-white text-md"> Email Address <span className=" text-red-600 text-xl">*</span></label>
    //             <input type="email"
    //             name="email"
    //             onChange={Storeformdetails}
    //             value={formdata.email}
    //             placeholder="Enter Your Email"
    //             className=" bg-gray-600 py-2 px-4 rounded-md placeholder:text-gray-300 w-[95%] text-white"></input>
    //         </div>

    //         <div className="flex flex-col mb-6">
    //         <label className="text-white"> Password <span className="text-red-600 text-xl">*</span></label>
    //             <input                   
    //             type="password"
    //             name="password"
    //             onChange={Storeformdetails}
    //             value={formdata.password}
    //             placeholder="Enter password"
    //             className="bg-gray-600 py-2 px-4 rounded-md placeholder:text-gray-300  w-[95%] text-white"></input>
    //             <span className=" text-sm text-blue-400 flex justify-end pr-6 pt-1"> <Link to={'/forget-password'} >Forget Password</Link></span>
    //         </div>

    //         <button onClick={changehandler} className= " bg-yellow-400 py-2 px-4 rounded-md w-[95%]">
    //             Login
    //         </button>
    //     </form>
    // </div>
    );

}

export default LoginForm