import React from "react";
import Instructor from "../../../assets/Images/Instructor.png";
import Highlight from "./Highlight";
import CtaButton from "./CtaButton";
import { FaArrowRightLong } from "react-icons/fa6";
function InstructorSection() {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 lg:gap-20 px-4 sm:px-10 md:px-16 lg:mx-20 justify-center">
  <div className="w-full lg:w-1/2">
    <img src={Instructor} alt="Instructor" className="w-full h-auto" />
  </div>
  
  <div className="flex flex-col items-start gap-3 w-full lg:w-1/2">
    <p className="text-2xl sm:text-3xl md:text-4xl font-semibold w-full sm:w-[80%] lg:w-[70%]">
      Become an <Highlight text={'instructor'} />
    </p>

    <p className="text-sm sm:text-base text-richblack-200 w-full sm:w-[90%] lg:w-[80%]">
      Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
    </p>

    <div className="mt-6 sm:mt-8">
      <CtaButton children={'Start Teaching Today'} linkTO={'/signup'} active={true} />
    </div>
  </div>
</div>

        // <div className=" flex  items-center gap-20 mx-20 justify-center">
        //     <div className=" w-[50%]">
        //         <img src={Instructor} alt="" />
        //     </div>
        //     <div className=" flex flex-col items-start gap-3 w-[50%]">
        //         <p className=" text-4xl font-semibold w-[40%]">Become an <Highlight text={'instructor'} /> </p>
        //         <p className=" w-[55%] text-richblack-200">Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
        //         <div className="mt-10 ">
        //             <CtaButton children={'Start Teaching Today'} linkTO={'/singup'} active={true} >
        //             </CtaButton>
        //         </div>
        //     </div>
        // </div>
    )
}
export default InstructorSection;