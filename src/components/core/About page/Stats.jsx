import React from "react";

const Stats = [
  { count: "5K", label: "Active Students" },
  { count: "10+", label: "Mentors" },
  { count: "200+", label: "Courses" },
  { count: "50+", label: "Awards" },
];

const StatsComponenet = () => {
  return (
    <div className="bg-richblack-700">
  {/* Stats */}
  <div className="flex flex-col gap-8 sm:gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 text-center gap-y-8 sm:gap-y-10">
      {Stats.map((data, index) => {
        return (
          <div className="flex flex-col py-6 sm:py-8 md:py-10" key={index}>
            <h1 className="text-2xl sm:text-3xl md:text-[30px] font-bold text-richblack-5">
              {data.count}
            </h1>
            <h2 className="font-medium sm:font-semibold text-sm sm:text-base md:text-[16px] text-richblack-500">
              {data.label}
            </h2>
          </div>
        );
      })}
    </div>
  </div>
</div>

    // <div className="bg-richblack-700">
    //   {/* Stats */}
    //   <div className="flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto ">
    //     <div className="grid grid-cols-2 md:grid-cols-4 text-center">
    //       {Stats.map((data, index) => {
    //         return (
    //           <div className="flex flex-col py-10" key={index}>
    //             <h1 className="text-[30px] font-bold text-richblack-5">
    //               {data.count}
    //             </h1>
    //             <h2 className="font-semibold text-[16px] text-richblack-500">
    //               {data.label}
    //             </h2>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
  );
};

export default StatsComponenet;