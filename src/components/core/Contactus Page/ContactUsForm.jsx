import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import countrycode from "../../../data/countrycode.json"
import toast from "react-hot-toast";
import {ContactUs} from "../../../services/operations/contactUs";
import { useDispatch } from "react-redux";

function ContactUsForm() {
    
    const { register, handleSubmit,reset, formState: { errors,isSubmitSuccessful } } = useForm();
    const dispatch = useDispatch();


    useEffect(()=>{
        reset({
            firstname:"",
            lastname:"",
            email:"",
            phoneNumber:"",
            message:""
        })
    },[isSubmitSuccessful,reset]);

    function onSubmitHandler(data){
       
        dispatch(ContactUs(data.firstname,data.lastname,data.email,data.countrycode,data.phoneNumber,data.message))
        toast('Wait Moments Save Message!',
            {
              icon: '⏳',
              style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
              },
            }
          );
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmitHandler)} className="" >
            <div className=" text-richblack-100 flex flex-col gap-4 items-center my-10">
                {/* firstname and lastname  */}
                <div className="flex justify-between  gap-2  w-[100%]">
                    <div className=" flex flex-col w-[50%] ">
                        <label htmlFor="firstname" className=" text-richblack-200 mb-1">Firstname</label>
                        <input type="text" id="firstname"
                        className="bg-richblack-800 py-2 rounded-md border-2 border-richblack-700 px-3"
                            name="firstname"
                            {...register("firstname", { required: true, })}
                            placeholder="enter firstname" />
                        {
                            errors.firstname && (
                                <p>Enter your first name</p>
                            )
                        }
                    </div>

                    <div className=" flex flex-col w-[50%] ">
                        <label htmlFor="lastname" className=" text-richblack-200 mb-1">Lastname </label>
                        <input type="text" id="lastname"
                        className="bg-richblack-800 py-2 w-full rounded-md border-2 border-richblack-700 px-3"
                            name="lastname"
                            {...register("lastname")}
                            placeholder="enter lastname" />
                    </div>
                </div>
                {/* email  */}
                <div className=" flex flex-col w-[100%]">
                    <label htmlFor="email" className=" text-richblack-200 mb-1">Enter Your email</label>
                    <input type="email" id="email" name="email"
                    className="bg-richblack-800 w-full py-2 rounded-md border-2 border-richblack-700 px-3"
                        placeholder="Enter your Email"
                        {...register("email", {
                            required: true,
                            pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                        })} />
                    {errors.email && errors.email.type === "required" && (
                        <p className="">Email is required.</p>
                    )}
                    {errors.email && errors.email.type === "pattern" && (
                        <p className="">Email is not valid.</p>
                    )}
                </div>
                {/* mobile number */}
                <div className=" w-full flex flex-col  gap-1">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <div className=" flex gap-3">
                    <select className=" bg-richblack-800 py-3 rounded-md border-2 border-richblack-700 px-3 w-[15%]" name="countrycode" id="countrycode" {...register("countrycode")}>
                        {
                            countrycode.map((country, index) => (
                                <option key={index} selected="+91">
                                    {country.code}-{country.country}
                                </option>
                            ))
                        }
                    </select>
                    <input type="number" name="phoneNumber" {...register("phoneNumber", {
                        required: true,
                        maxLength:10,
                        minLength:10
                    })}
                    placeholder="12345 67890"
                    className="bg-richblack-800 w-[82%] py-3 rounded-md border-2 border-richblack-700 px-3" />
                    </div>
                    {
                        errors.phoneNumber  && (
                            <p>Invalid phone number</p>
                        )
                    }
                </div>
                {/* message  */}
                <div className=" flex flex-col w-full">
                    <label htmlFor="message" className=" text-richblack-200 mb-1">Message</label>
                    <textarea name="message" id="message" cols="30" rows="5"
                     placeholder="Enter message here"
                        {...register("message", { required: true })}
                        className="bg-richblack-800 py-3 rounded-md border-2 border-richblack-700 px-3"
                        ></textarea>
                    {
                        errors.message && (
                            <p>message is Required</p>
                        )
                    }

                </div>
                <div className=" w-full">
                    <button type="submit" className=" text-black bg-yellow-50 font-medium rounded-lg w-full py-2 ">Send Messsage</button>
                </div>
            </div>
        </form>
    )
}
export default ContactUsForm;