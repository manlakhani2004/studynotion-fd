import React from "react";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import TimeLineImage from "../../../assets/Images/TimelineImage.png"
let data= [
    {
        id:1,
        logo:Logo1,
        title:"Leadership",
        desc:"Fully committed to the success company"
    },
    {
        id:2,
        logo:Logo2,
        title:"Responsibility",
        desc:"Students will always be our top priority"
    },
    {
        id:3,
        logo:Logo3,
        title:"Flexibility",
        desc:"The ability to switch is an important skills"
    },
    {
        id:4,
        logo:Logo4,
        title:"Solve the problem",
        desc:"Code your way to a solution"
    },
]

function TimeLineSection(){
    return(
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 my-10 md:my-16 px-4 md:px-8">
  {/* left section */}
  <div className="flex flex-col gap-10 md:gap-12 justify-center w-full lg:w-1/2">
    {data.map((element) => (
      <div className="flex items-start gap-4 sm:gap-6" key={element.id}>
        <div className="p-3 rounded-full bg-white shadow-md shadow-richblack-100">
          <img src={element.logo} alt="logo1" className="w-6 sm:w-8" />
        </div>
        <div>
          <p className="font-semibold text-base md:text-lg">{element.title}</p>
          <p className="text-sm md:text-base text-richblack-300">{element.desc}</p>
        </div>
      </div>
    ))}
  </div>

  {/* right section */}
  <div className="relative w-full lg:w-1/2 flex justify-center">
    <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-auto">
      <img src={TimeLineImage} alt="" className="w-full h-auto" />
    </div>

    <div className="absolute -bottom-10 sm:-bottom-12 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-24 bg-caribbeangreen-700 w-[90%] sm:w-[80%] md:w-[500px] flex flex-col sm:flex-row justify-around px-4 py-6 sm:py-7 text-white shadow-lg rounded-lg">
      <div className="flex gap-3 items-center justify-center">
        <p className="text-xl sm:text-2xl font-bold">10</p>
        <p className="text-sm sm:text-base text-caribbeangreen-5 text-center sm:text-left">
          YEARS <br /> EXPERIENCES
        </p>
      </div>

      <div className="hidden sm:block w-[2px] bg-richblack-50 mx-2"></div>

      <div className="flex gap-3 items-center justify-center mt-4 sm:mt-0">
        <p className="text-xl sm:text-2xl font-bold">250</p>
        <p className="text-sm sm:text-base text-caribbeangreen-5 text-center sm:text-left">
          TYPES OF <br /> COURSES
        </p>
      </div>
    </div>
  </div>
</div>

        // <div className=" flex justify-between my-16">
        //     {/* left section  */}
        //     <div className=" flex flex-col gap-12 justify-center ml-10">
        //         {
        //             data.map((element)=>{
        //                 return(
        //                     <div className="flex items-center gap-6" key={element.id}>
        //                         <div className=" p-3 rounded-full bg-white  shadow-md shadow-richblack-100 ">
        //                             <img src={element.logo} alt="logo1" />
        //                         </div>
        //                         <div>
        //                             <p className=" font-semibold">{element.title}</p>
        //                             <p>{element.desc}</p>
        //                         </div>
        //                     </div>
        //                 )
        //             })
        //         }
        //     </div>
        //     {/* right section  */}
        //     <div className=" relative ">
        //         <div>
        //             <img src={TimeLineImage} alt=""  />
        //         </div>
                
        //         <div className="absolute bottom-[-40px] right-24 bg-caribbeangreen-700 w-[500px] flex justify-around px-5 py-7 text-white ">
        //             <div className="flex gap-4 items-center">
        //                 <p className=" text-2xl font-bold">10</p>
        //                 <p className=" text-sm text-caribbeangreen-5">YEARS <br></br> EXPERIENCES</p>
        //             </div>
        //             <div className=" w-[2px] bg-richblack-50"></div>
        //             <div className="flex gap-4 items-center">
        //                 <p className=" text-2xl font-bold">250</p>
        //                 <p className=" text-sm text-caribbeangreen-5">TYPES OF <br /> COURSES</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default TimeLineSection;