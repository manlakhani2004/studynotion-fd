import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Course_card from './Course_card'



function CourseSlider({ courses }) {
    // console.log(courses);
    return (
        <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
  {courses?.length ? (
    <div className="w-full">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper w-full"
      >
        <SwiperSlide className="flex justify-center gap-4 flex-wrap sm:gap-6 md:gap-8">
          {courses.map((course, index) => (
            <Course_card
              course={course}
              height="h-[220px] sm:h-[250px] md:h-[280px]"
              key={index}
            />
          ))}
        </SwiperSlide>
      </Swiper>
    </div>
  ) : (
    <p className="text-base sm:text-lg md:text-xl text-richblack-5 text-center mt-4">
      No course Found
    </p>
  )}
</div>

        // <div>
        //     {
        //         courses?.length ? (
        //         <div>
        //             <Swiper
        //                      cssMode={true}
        //                      navigation={true}
        //                      pagination={true}
        //                      mousewheel={true}
        //                      keyboard={true}
        //                      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        //                      className="mySwiper">
        //                 <SwiperSlide>
        //                     {
        //                         courses.map((course,index)=>(
        //                             <Course_card course={course} height={'h-[250px]'} key={index}/>
        //                         ))
        //                     }
        //                 </SwiperSlide>
        //             </Swiper>
        //         </div>) : (
        //             <p className='text-xl text-richblack-5'>No course Found</p>
        //         )
        //     }
        // </div>
    )
}
export default CourseSlider;