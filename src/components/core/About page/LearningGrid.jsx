import React from "react";
import Highlight from "../Homepage/Highlight";
import CtaButton from "../Homepage/CtaButton";

const LearningGridArray = [
    {
        order: -1,
        heading: "World-Class Learning for",
        highlightText: "Anyone, Anywhere",
        description:
            "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
        BtnText: "Learn More",
        BtnLink: "/",
    },
    {
        order: 1,
        heading: "Curriculum Based on Industry Needs",
        description:
            "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
    },
    {
        order: 2,
        heading: "Our Learning Methods",
        description:
            "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
        order: 3,
        heading: "Certification",
        description:
            "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
        order: 4,
        heading: `Rating "Auto-grading"`,
        description:
            "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
        order: 5,
        heading: "Ready to Work",
        description:
            "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
];
function LearningGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
    {
        LearningGridArray.map((card, index) => (
            <div key={index}
                className={`
                    ${index === 0 && "lg:col-span-2 bg-transparent sm:h-[300px] md:h-[280px] lg:h-[250px]"}
                    ${(card.order % 2 === 1
                        ? "bg-richblack-700"
                        : "bg-richblack-800")}
                    ${card.order === 3 && "lg:col-start-2"}
                    h-[250px] sm:h-[280px] md:h-[280px] lg:h-[250px] px-4 py-3
                `}
            >
                {
                    (card.order < 0)
                        ? (
                            <div className="flex flex-col gap-3 w-full sm:w-[95%] md:w-[90%] lg:w-[88%]">
                                <h1 className="text-2xl sm:text-3xl">{card.heading}<br /><Highlight text={card.highlightText} /></h1>
                                <p className="text-richblack-200 text-sm sm:text-base">{card.description}</p>
                                <div className="mt-3">
                                    <CtaButton active={true} linkTO={card.BtnLink} children={card.BtnText} />
                                </div>
                            </div>
                        )
                        : (
                            <div className="flex flex-col gap-4 px-2 sm:px-4 md:px-6 lg:px-8 py-5 sm:py-6 lg:py-7">
                                <div className="text-base sm:text-lg font-semibold text-richblack-25">{card.heading}</div>
                                <p className="text-richblack-200 text-sm sm:text-base">{card.description}</p>
                            </div>
                        )
                }
            </div>
        ))
    }
</div>

        // <div className=" grid grid-cols-1 lg:grid-cols-4  text-white">
        //     {
        //         LearningGridArray.map((card, index) => (
        //             <div key={index}
        //                 className={`
        //                 ${index == 0 && "lg:col-span-2 bg-transparent h-[250px]"}

        //                 ${(card.order % 2 == 1 ? "bg-richblack-700  h-[250px]" : "  bg-richblack-800 h-[250px]")}

        //                 ${card.order === 3 && " col-start-2"}
        //             `}>
        //                 {
        //                     (card.order < 0) ?
        //                         (<div className=" flex flex-col py-3 w-[88%] gap-3">
        //                             <h1 className=" text-3xl">{card.heading} <br></br> <Highlight text={card.highlightText} /></h1>
        //                             <p className=" text-richblack-200">{card.description}</p>
        //                             <div className=" mt-3">
        //                                 <CtaButton active={true} linkTO={card.BtnLink} children={card.BtnText} />
        //                             </div>
        //                         </div>)
        //                         : (<div className=" flex gap-4 py-7 px-8 flex-col ">
        //                             <div className=" text-lg font-semibold text-richblack-25">{card.heading}</div>
        //                             <p className=" text-richblack-200">
        //                                 {card.description}
        //                             </p>
        //                         </div>)
        //                 }
        //             </div>
        //         ))
        //     }
        // </div>
    )
}

export default LearningGrid;