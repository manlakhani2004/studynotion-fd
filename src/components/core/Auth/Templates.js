import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import bgimg from '../../../assets/Images/backgroundimg.jpg';
import {FcGoogle} from 'react-icons/fc'

function Templates({ heading, desc1, desc2, formtype, img, setIsLogined }) {
    return (
        <div className="w-full max-w-7xl px-4 py-12 mx-auto flex flex-col lg:flex-row gap-10 lg:gap-x-12 justify-center items-center">
  {/* left container */}
  <div className="flex flex-col w-full max-w-md">
    <div>
      <h1 className="text-white font-semibold text-2xl sm:text-3xl leading-snug">{heading}</h1>
      <p className="text-base sm:text-lg mt-4 text-white">{desc1}</p>
      <p className="text-blue-300 italic mt-2">{desc2}</p>
    </div>

    <div className="mt-6">
      {
        formtype === "signup"
          ? <SignupForm setIsLogined={setIsLogined} />
          : <LoginForm setIsLogined={setIsLogined} />
      }
    </div>

    <div className="mt-6">
      <div className="flex items-center gap-1 w-full">
        <div className="h-px w-full bg-slate-700"></div>
        <span className="text-white text-sm sm:text-base">OR</span>
        <div className="h-px w-full bg-slate-700"></div>
      </div>

      <button className="flex justify-center items-center gap-2 border border-gray-600 py-2 rounded-md mt-6 w-full">
        <FcGoogle className="text-xl" />
        <p className="text-white font-medium">Sign Up with Google</p>
      </button>
    </div>
  </div>

  {/* right container */}
  <div className="relative w-full max-w-md hidden sm:block">
    <img
      src={bgimg}
      className="absolute top-6 left-5 rounded-xl h-[300px] sm:h-[350px] md:h-[370px] w-full object-cover z-0"
      alt=""
    />
    <img
      src={img}
      className="relative rounded-xl h-[300px] sm:h-[350px] md:h-[370px] w-full object-cover z-10"
      alt="login/signupimg"
    />
  </div>
</div>

        // <div className=" w-[1250px] py-12 gap-x-12 justify-center  flex mx-auto">
        //     {/* left container */}
        //     <div className="flex flex-col w-11/12 max-w-[450px]">
        //         <div>
        //             <h1 className="text-white  font-semibold text-[1.86rem] leading-[2.375rem]">{heading}</h1>
        //             <p className=" text-[1.125rem] leading-[1.625rem] mt-4 text-white">{desc1}</p>
        //             <p className="text-blue-300 italic ">{desc2}</p>
        //         </div>

        //         <div>
        //             {
        //                 (formtype == "signup") ? (<SignupForm setIsLogined={setIsLogined} />) : (<LoginForm setIsLogined={setIsLogined} />)
        //             }
        //         </div>

        //         <div className= "mt-4">

        //             <div className=" flex items-center gap-1 w-[90%]">
        //                 <div className=" h-[1px] w-full bg-slate-700"></div>
        //                 <span className=" text-white">OR</span>
        //                 <div className=" h-[1px] w-full bg-slate-700"></div>
        //             </div>

        //             <button className="flex justify-center items-center gap-2  border border-gray-600 py-2  rounded-md mt-6 w-[95%]">
        //                 <FcGoogle className=" text-xl"/>
        //                 <p className="text-white font-medium ">Sign Up with Google</p>
        //             </button>

        //         </div>
        //     </div>

        //     {/* right-container  */}
        //     <div className=" relative w-11/12 max-w-[450px] ">             
        //             <img src={bgimg} className=" absolute order-3 top-6 rounded-xl left-5 h-[370px]" height={355} width={435}></img>
        //             <img src={img} className=" absolute order-1 rounded-xl top-1  h-[370px] object-cover" alt="login/signupimg"  width={435}></img>
        //     </div>
        // </div>
    )


}

export default Templates;