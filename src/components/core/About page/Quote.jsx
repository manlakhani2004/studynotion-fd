import React from 'react'
import HighlightText from '../Homepage/Highlight'

const Quote = () => {
  return (
    <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mx-auto py-5 pb-20 text-center text-white w-11/12 sm:w-10/12 lg:w-8/12">
    We are passionate about revolutionizing the way we learn. Our
    innovative platform <HighlightText text={"combines technology"} />,{" "}
    <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
        expertise
    </span>
    , and community to create an
    <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">
        unparalleled educational experience.
    </span>
</div>

    // <div className=" text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-white">
    //     We are passionate about revolutionizing the way we learn. Our
    //     innovative platform <HighlightText text={"combines technology"} />,{" "}
    //     <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
    //         {" "}
    //         expertise
    //     </span>
    //     , and community to create an
    //     <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">
    //         {" "}
    //         unparalleled educational
    //     experience.
    //     </span> 
    // </div>
  )
}

export default Quote