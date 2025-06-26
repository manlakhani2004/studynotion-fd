import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ACCOUNT_TYPE } from "../../../services/utils/constants";
import { setSignUpData } from "../../../slice/authSlice";
import { sendOtp } from "../../../services/operations/auth";
import Tab from "./Tab";

function SignupForm(props) {

    const dispatch = useDispatch();
    let navigate = useNavigate();
    

    let [account,setaccount] = useState(ACCOUNT_TYPE.STUDENT);

    const [formdata, setformdata] = useState(
        {
            fname: '',
            lname: '',
            email: '',
            createpass: '',
            confrimpass: '',
        }
    )

    function onSubmitHandler(e){
        e.preventDefault();

        const allFormData ={
            ...formdata,
            account
        }
        
        if(allFormData.createpass !== allFormData.confrimpass){
            toast.error("Passwords Do Not Match")
            return;
        }

        //store signup data on slice
        dispatch(setSignUpData(allFormData));

        //send otp
            dispatch(sendOtp(allFormData.email,navigate))
            console.log("sign up data",allFormData);
        // reset form data
        setformdata({
            fname: '',
            lname: '',
            email: '',
            createpass: '',
            confrimpass: '',
        })
        setaccount(ACCOUNT_TYPE.STUDENT);
        toast.success("submited");
    }

    function Storeformdetails(event) {
        setformdata((previousvalue) => {
            return {
                ...previousvalue,
                [event.target.name]: event.target.value
            }
        })
    }

      const tabData = [
    {
      id: 1,
      tabName: "Student",
      type: ACCOUNT_TYPE.STUDENT,
    },
    {
      id: 2,
      tabName: "Instructor",
      type: ACCOUNT_TYPE.INSTRUCTOR,
    },
  ]


    return (
        <div className="w-full">
  {/* Tab */}
  <Tab tabData={tabData} field={account} setField={setaccount} />

  <form onSubmit={onSubmitHandler} className="w-full">
    {/* Name Fields */}
    <div className="flex flex-col sm:flex-row sm:gap-4">
      <div className="flex flex-col mb-3 w-full sm:w-1/2">
        <label className="text-white text-sm sm:text-base">
          First name <span className="text-red-600 text-lg">*</span>
        </label>
        <input
          type="text"
          onChange={Storeformdetails}
          name="fname"
          value={formdata.fname}
          placeholder="Enter First Name"
          className="bg-gray-600 py-2 px-4 rounded-md placeholder:text-gray-300 text-white w-full"
        />
      </div>

      <div className="flex flex-col mb-3 w-full sm:w-1/2">
        <label className="text-white text-sm sm:text-base">
          Last name <span className="text-red-600 text-lg">*</span>
        </label>
        <input
          type="text"
          onChange={Storeformdetails}
          value={formdata.lname}
          name="lname"
          placeholder="Enter Last Name"
          className="bg-gray-600 py-2 px-4 rounded-md placeholder:text-gray-300 text-white w-full"
        />
      </div>
    </div>

    {/* Email */}
    <div className="flex flex-col mb-3 w-full">
      <label className="text-white text-sm sm:text-base">
        Email <span className="text-red-600 text-lg">*</span>
      </label>
      <input
        type="email"
        onChange={Storeformdetails}
        value={formdata.email}
        name="email"
        placeholder="Enter Your Email"
        className="bg-gray-600 py-2 px-4 rounded-md placeholder:text-gray-300 text-white w-full"
      />
    </div>

    {/* Passwords */}
    <div className="flex flex-col sm:flex-row sm:gap-4">
      <div className="flex flex-col mb-3 w-full sm:w-1/2">
        <label className="text-white text-sm sm:text-base">
          Create Password <span className="text-red-600 text-lg">*</span>
        </label>
        <input
          type="password"
          onChange={Storeformdetails}
          value={formdata.createpass}
          name="createpass"
          placeholder="Create Password"
          className="bg-gray-600 py-2 px-4 rounded-md placeholder:text-gray-300 text-white w-full"
        />
      </div>

      <div className="flex flex-col mb-3 w-full sm:w-1/2">
        <label className="text-white text-sm sm:text-base">
          Confirm Password <span className="text-red-600 text-lg">*</span>
        </label>
        <input
          type="password"
          onChange={Storeformdetails}
          value={formdata.confrimpass}
          name="confrimpass"
          placeholder="Confirm Password"
          className="bg-gray-600 py-2 px-4 rounded-md placeholder:text-gray-300 text-white w-full"
        />
      </div>
    </div>

    {/* Submit */}
    <div className="mt-4">
      <button
        type="submit"
        className="bg-yellow-400 py-2 px-4 rounded-md w-full sm:w-[95%] text-sm sm:text-base"
      >
        Create Account
      </button>
    </div>
  </form>
</div>

    //     <div>
    //          {/* Tab */}
    //   <Tab tabData={tabData} field={account} setField={setaccount} />
    //         {/* <div className="py-1 px-2 bg-gray-600  rounded-3xl w-fit flex gap-2 my-4">
    //             <button className={`${account == "student"?"bg-slate-900 text-white":" bg-transparent text-white"}     py-2 px-3 rounded-3xl transition-all duration-200`} onClick={()=> setaccount("student")}>Student</button>
    //             <button className={`${account == "instructor"?" bg-slate-900 text-white":" bg-transparent text-white"} py-2 px-3 rounded-3xl `}  onClick={()=> setaccount("instructor")}>Instructor</button>
    //         </div> */}

    //         <form onSubmit={onSubmitHandler}>
    //             <div className="flex gap-4">

    //                 <div className="flex flex-col mb-3 w-[45%]">
    //                     <label  className="text-white"> First name <span className="text-red-600 text-xl">*</span></label>
    //                     <input type="text"
    //                         onChange={Storeformdetails}
    //                         name="fname"
    //                         value={formdata.fname}
    //                         placeholder="Enter First Name"
    //                         className="bg-gray-600 py-2 px-4 rounded-md placeholder:text-gray-300 text-white"
    //                     ></input>
    //                 </div>

    //                 <div className="flex flex-col mb-3 w-[45%]">
    //                     <label className="text-white">Last name <span className="text-red-600 text-xl">*</span></label>
    //                     <input type="text"
    //                         onChange={Storeformdetails}
    //                         value={formdata.lname}
    //                         name="lname"
    //                         placeholder="Enter Last Name"
    //                         className="bg-gray-600 py-2 px-4 rounded-md placeholder:text-gray-300 text-white"></input>
    //                 </div>
    //             </div>

    //             <div className="flex flex-col mb-3 ">
    //                 <label className="text-white">Email <span className="text-red-600 text-xl">*</span></label>
    //                 <input type="email"
    //                     onChange={Storeformdetails}
    //                     value={formdata.email}
    //                     name="email"
    //                     placeholder="Enter Your Email"
    //                     className="bg-gray-600 py-2 px-4 rounded-md placeholder:text-gray-300  w-[94%] text-white"></input>
    //             </div>

    //             <div className="flex gap-4">
    //                 <div className="flex flex-col mb-3 w-[45%] ">
    //                     <label className="text-white">Create Password <span className="text-red-600 text-xl">*</span></label>
    //                     <input type="password"
    //                         onChange={Storeformdetails}
    //                         value={formdata.createpass}
    //                         name="createpass"
    //                         placeholder="Create Password"
    //                         className="bg-gray-600 py-2 px-4 rounded-md placeholder:text-gray-300 text-white"></input>
    //                 </div>

    //                 <div className="flex flex-col mb-3 w-[45%]">
    //                     <label className="text-white">Confrim Password <span className="text-red-600 text-xl">*</span></label>
    //                     <input type="password"
    //                         onChange={Storeformdetails}
    //                         value={formdata.confrimpass}
    //                         name="confrimpass"
    //                         placeholder="Confrim Password"
    //                         className="bg-gray-600 py-2 px-4 rounded-md placeholder:text-gray-300 text-white"></input>
    //                 </div>
    //             </div>

    //             <div>
    //                 <button type="submit" className=" bg-yellow-400 py-2 px-4 rounded-md w-[95%] mt-4">Create Account</button>
    //             </div>
    //         </form>
    //     </div >
    );
}

export default SignupForm;