import React from "react";
import { useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa"
import RenderCourseInformation from "./course information/RenderCourseInformation";
import RenderCourseBuilder from "./build course/RenderCourseBuilder";
import RenderPublish from "./coursePublish/index";

const stepsData = [
    {
        id: 1,
        name: "Course Information"
    },
    {
        id: 2,
        name: "Course Builder",
    },
    {
        id: 3,
        name: "Publish"
    }
];

function RenderSteps() {
    const { step } = useSelector((state) => state.course);
    return (
        <div>
  {/* Progress Buttons */}
  <div className="relative mb-2 flex w-full justify-center">
    {stepsData.map((item, index) => (
      <React.Fragment key={item.id}>
        <div className="flex flex-col items-center">
          <button
            className={`grid cursor-default aspect-square w-[34px] place-items-center rounded-full border-[1px] ${
              step === item.id
                ? "border-yellow-50 bg-yellow-900 text-yellow-50"
                : "border-richblack-700 bg-richblack-800 text-richblack-300"
            } ${step > item.id && "bg-yellow-50 text-yellow-50"}`}
          >
            {step > item.id ? (
              <FaCheck className="font-bold text-richblack-900" />
            ) : (
              item.id
            )}
          </button>
        </div>

        {item.id !== stepsData.length && (
          <div
            className={`h-[calc(34px/2)] w-[33%] border-dashed border-b-2 ${
              step > item.id
                ? "border-yellow-50"
                : "border-richblack-500"
            }`}
          ></div>
        )}
      </React.Fragment>
    ))}
  </div>

  {/* Step Titles */}
  <div className="relative mb-16 flex w-full select-none justify-between">
    {stepsData.map((item) => (
      <div
        className="flex min-w-[130px] flex-col items-center gap-y-2"
        key={item.id}
      >
        <p
          className={`text-sm ${
            step >= item.id ? "text-richblack-5" : "text-richblack-500"
          }`}
        >
          {item.name}
        </p>
      </div>
    ))}
  </div>

  {/* Step Components */}
  {step === 1 && <RenderCourseInformation />}
  {step === 2 && <RenderCourseBuilder />}
  {step === 3 && <RenderPublish />}
</div>

        // <div>
        //     <div className="flex flex-col gap-3">
        //         <div className="flex justify-between">
        //             {
        //                 stepsData.map((Step) => (
        //                     <div className="flex items-center" key={Step.id}>
        //                     <div key={Step.id} className={`${Step.id === step ? " text-yellow-100 bg-yellow-800 border-2 border-yellow-200" : " text-richblack-200 bg-richblack-700 border-2 border-richblack-400"}
        //                     ${step > Step.id && ("text-yellow-50 bg-yellow-800 border-yellow-200 py-3 px-2")} rounded-full  py-2 px-4`}>
        //                         {
        //                             step > Step.id ? (
        //                                 <FaCheck className=" text-yellow-200"></FaCheck>
        //                             ) : (
        //                                 Step.id
        //                             )
        //                         }

        //                     </div>
        //                     {
        //                         Step.id !== 3 &&
        //                     <div className={`${step > Step.id && ("text-yellow-5")}  text-2xl `}>- - - - - - - - - - - - - - - - -</div>
        //                     }
        //                     </div>
        //                 ))
        //             }
                   
        //         </div>
        //         <div className="flex justify-between">
        //             {
        //                 stepsData.map((item) => (
        //                     <div key={item.id}>
        //                         {item.name}
        //                     </div>
        //                 ))
        //             }
        //         </div>
        //     </div>

        //     {
        //         step === 1 && (
        //             <RenderCourseInformation />
        //         )
        //     }
        //     {
        //         step === 2 && (
        //             <RenderCourseBuilder/>
        //         )
        //     }
        //     {
        //         step === 3 && (
        //             <RenderPublish/>
        //         )
        //     }
        // </div>
    )
}

export default RenderSteps;