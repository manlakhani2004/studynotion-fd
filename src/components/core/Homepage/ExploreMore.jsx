import React, { useState } from "react";
import Highlight from "./Highlight";
import { HomePageExplore } from '../../../data/homepage-explore';
import { FaUserGroup } from "react-icons/fa6";
import { MdPlayLesson } from "react-icons/md";
const CourseTags = [
    'Free',
    'New to coding',
    'Most popular',
    'Skills paths',
    'Career paths'
];

function ExploreMore() {
    const [currentTage, setCurrentTage] = useState(HomePageExplore[0].tag);
    const [currentCourse, setCurrentCourse] = useState(HomePageExplore[0].courses);

    function updateCurrentTage(CurrentTag) {
        HomePageExplore.filter((course) => {
            if (CurrentTag === course.tag) {
                setCurrentTage(course.tag);
                setCurrentCourse(course.courses);
            }
        });
    }
    return (
        <div className="flex flex-col items-center mt-6 sm:mt-8 md:mt-10">
  <div className="px-4 sm:px-0">
    <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
      Unlock the <Highlight text={'Power of code'} />
    </p>
    <p className="text-center text-richblack-300 pt-2 text-sm sm:text-base">
      Learn to Build Anything You Can Imagine
    </p>
  </div>

  <div className="flex flex-wrap justify-center gap-2 sm:gap-3 bg-richblack-800 border border-richblack-700 py-1 px-3 sm:px-4 text-richblack-100 mt-8 sm:mt-9 mb-6 rounded-full">
    {
      CourseTags.map((tag, index) => (
        <div
          key={index}
          className={`text-sm sm:text-base py-1 sm:py-2 px-3 rounded-full cursor-pointer
            ${currentTage === tag ? "bg-richblack-900 transition-all duration-200" : "bg-richblack-800"}`}
          onClick={() => updateCurrentTage(tag)}
        >
          {tag}
        </div>
      ))
    }
  </div>

  <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 relative top-8 sm:top-12 px-4 sm:px-0">
    {
      currentCourse.map((course, index) => {
        return (
          <div
            key={index}
            className="bg-richblack-800 py-6 sm:py-8 px-4 sm:px-5 flex flex-col gap-3 rounded-md w-full sm:w-[80%] md:w-[300px]"
          >
            <h1 className="text-xl sm:text-2xl font-semibold text-richblack-5">
              {course.heading}
            </h1>
            <p className="text-sm sm:text-base text-richblack-100">
              {course.description}
            </p>
            <div className="flex justify-between mt-6 sm:mt-10 text-xs sm:text-sm">
              <div className="flex gap-2 sm:gap-3 text-richblack-5 items-center">
                <FaUserGroup />
                <p>{course.level}</p>
              </div>
              <div className="flex gap-2 sm:gap-3 text-richblack-5 items-center">
                <MdPlayLesson />
                <p>{course.lessionNumber} Lessons</p>
              </div>
            </div>
          </div>
        );
      })
    }
  </div>
</div>

        // <div className="flex flex-col items-center mt-5">
        //     <div>
        //         <p className=" text-4xl font-semibold text-center">Unlock the <Highlight text={'Power of code'} /></p>
        //         <p className=" text-center text-richblack-300 pt-2">Learn to Build Anything You Can Imagine</p>
        //     </div>
        //     <div className="flex justify-center gap-3 bg-richblack-800 border-1 py-1 text-richblack-100 mb-4 mt-9 px-4 rounded-full border-richblack-700">
        //         {
        //             CourseTags.map((tag, index) => (
        //                 <div className={` text-base py-2 px-3 rounded-full cursor-pointer ${(currentTage === tag) ? " bg-richblack-900 transition-all duration-200" : " bg-richblack-800"}`} onClick={() => { updateCurrentTage(tag) }} key={index} >{tag}</div>
        //             ))
        //         }
        //     </div>

        //     <div className=" flex gap-10 relative top-14">

        //         {
        //             currentCourse.map((course, index) => {
        //                 return (
        //                     <div key={index} className=" bg-richblack-800 py-10 px-5 flex flex-col gap-3 rounded-md">
        //                         <h1 className=" text-2xl font-semibold text-richblack-5 ">{course.heading}</h1>
        //                         <p className=" text-lg text-richblack-100">{course.description}</p>
        //                         <div className=" flex justify-between mt-10">
        //                             <div className="flex gap-3 text-richblack-5">
        //                                 <div><FaUserGroup /></div>
        //                                 <p>{course.level}</p>
        //                             </div>
        //                             <div className="flex gap-3 text-richblack-5">
        //                                 <div><MdPlayLesson></MdPlayLesson></div>
        //                                 <p>{course.lessionNumber} Lessons</p>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 )
        //             })
        //         }

        //     </div>
        // </div>
    )
}
export default ExploreMore;