import React from "react";
import CtaButton from "./CtaButton";
import { TypeAnimation } from "react-type-animation";

function CodeBlocks({ postion, heading, subheading, ctabtton1, ctabtton2, CodeLine, CodeColor, codeBgColor }) {
    return (
        // <div className={`flex ${postion}  w-[100%]  justify-between mx-10 my-16` }>
        //     <div className=" w-[40%]  flex flex-col gap-4 ">
        //         <h1>{heading}</h1>
        //         <div className=" text-richblack-300  font-semibold">
        //             {subheading}
        //         </div>
        //         <div className="flex gap-2">
        //             <CtaButton active={ctabtton1.active} linkTO={ctabtton1.linkTO} children={ctabtton1.children} />
        //             <CtaButton active={ctabtton2.active} linkTO={ctabtton2.linkTO} children={ctabtton2.children} />
        //         </div>
        //     </div>
        //     <div className=" relative z-10 flex gap-1 w-[40%]  bg-opacity-25 rounded-lg bg-richblack-400 px-4 py-2">
        //         <div className={` absolute z-[-10] blur-3xl  top-[-2%] left-[-5%] order-1 h-[300px] w-[300px] rounded-full ${codeBgColor} `}></div>
        //         <div className=" flex flex-col text-base ">
        //             <p>1</p>
        //             <p>2</p>
        //             <p>3</p>
        //             <p>4</p>
        //             <p>5</p>
        //             <p>6</p>
        //             <p>7</p>
        //             <p>8</p>
        //             <p>9</p>
        //             <p>10</p>
        //             <p>11</p>   
        //         </div>
        //         <div className={` ${CodeColor} font-semibold  `}>
        //             <TypeAnimation
        //             sequence={[CodeLine,1000,""]}
        //             repeat={Infinity}
        //             omitDeletionAnimation={true}
        //             cursor={true}
        //             style={
        //                 {
        //                     whiteSpace:"pre-line",
        //                     display:"block"
        //                 }
        //             }></TypeAnimation>
        //         </div>
        //     </div>
        // </div>
        <div className={`flex flex-col lg:${postion} w-full justify-between mx-4 sm:mx-6 md:mx-10 my-10 sm:my-12 md:my-16`}>
  {/* Left Section */}
  <div className="w-full lg:w-[45%] flex flex-col gap-4 mb-6 lg:mb-0">
    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{heading}</h1>
    <div className="text-richblack-300 font-medium text-sm sm:text-base">
      {subheading}
    </div>
    <div className="flex flex-col sm:flex-row gap-2">
      <CtaButton
        active={ctabtton1.active}
        linkTO={ctabtton1.linkTO}
        children={ctabtton1.children}
      />
      <CtaButton
        active={ctabtton2.active}
        linkTO={ctabtton2.linkTO}
        children={ctabtton2.children}
      />
    </div>
  </div>

  {/* Right Section */}
  <div className="relative z-10 flex gap-1 w-full lg:w-[50%] bg-opacity-25 rounded-lg bg-richblack-400 px-3 sm:px-4 py-3 sm:py-4 overflow-x-auto">
    <div
      className={`absolute z-[-10] blur-3xl top-[-2%] left-[-5%] order-1 h-[200px] sm:h-[250px] md:h-[300px] w-[200px] sm:w-[250px] md:w-[300px] rounded-full ${codeBgColor}`}
    ></div>

    <div className="flex flex-col text-xs sm:text-sm md:text-base font-mono text-richblack-200">
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
      <p>6</p>
      <p>7</p>
      <p>8</p>
      <p>9</p>
      <p>10</p>
      <p>11</p>
    </div>

    <div className={`${CodeColor} font-semibold text-xs sm:text-sm md:text-base`}>
      <TypeAnimation
        sequence={[CodeLine, 1000, '']}
        repeat={Infinity}
        omitDeletionAnimation={true}
        cursor={true}
        style={{
          whiteSpace: 'pre-line',
          display: 'block',
        }}
      />
    </div>
  </div>
</div>

    )
}

export default CodeBlocks