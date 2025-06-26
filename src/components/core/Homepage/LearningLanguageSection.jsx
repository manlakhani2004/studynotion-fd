import React from "react";
import Highlight from "./Highlight";
import KnowYourProgress from '../../../assets/Images/Know_your_progress.svg'
import CompareWithOthers from '../../../assets/Images/Compare_with_others.svg'
import PlanYourLessons from '../../../assets/Images/Plan_your_lessons.svg'
import CtaButton from "./CtaButton";

function LearningLanguageSection() {
    return (
        <div className="flex flex-col gap-6 items-center justify-center my-20 sm:my-[100px] md:my-[130px] px-4 sm:px-6 md:px-10">
            <div>
                <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-center py-3">
                    Your swiss knife for <Highlight text={'learning any language'} />
                </h1>
                <p className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto text-center text-sm sm:text-base">
                    Using spin making learning multiple languages easy. With 20+ languages, realistic voice-over, progress tracking, custom schedule, and more.
                </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center relative gap-5 md:gap-0 mt-6">
                <img src={KnowYourProgress} className="w-[70%] md:w-auto md:-mr-32" />
                <img src={CompareWithOthers} className="w-[70%] md:w-auto mt-5 md:mt-10" />
                <img src={PlanYourLessons} className="w-[70%] md:w-auto md:-ml-36" />
            </div>

            <div className="mt-6">
                <CtaButton children={'Learn More'} active={true} linkTO={'/signup'} />
            </div>
        </div>

        // <div className=" flex flex-col gap-3 items-center justify-center my-[130px]">
        //     <div >
        //         <h1 className="font-semibold text-4xl text-center py-3">Your swiss knife for <Highlight text={'learning any language'} /></h1>
        //         <p className=" w-[70%] mx-auto text-center">Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</p>
        //     </div>
        //     <div className="flex ">
        //         <img src={KnowYourProgress} className=" -mr-32"/>
        //         <img src={CompareWithOthers} className=" mt-10"/>
        //         <img src={PlanYourLessons} className=" -ml-36"/>
        //     </div>
        //     <div>
        //         <CtaButton children={'Learn More'} active={true} linkTO={'/singup'}/>
        //     </div>
        // </div>
    )
}
export default LearningLanguageSection