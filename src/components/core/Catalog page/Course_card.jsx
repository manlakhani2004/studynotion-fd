import React, { useEffect, useState } from "react";
import RatingStars from "../../common/RatingStars";
import GetAvgRating from "../../../services/utils/avgRating";
import { Link } from "react-router-dom";


function Course_card({course,height}){
    const [avgRatingCount,setAvgRatingCount] = useState(0);

    useEffect(()=>{
        const count = GetAvgRating(course?.RatingAndReview);
        setAvgRatingCount(count);
    },[course]);
    return(
      <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] flex justify-between">
  <Link to={`/courses/${course._id}`} className="w-full">
    <div className="w-full">
      {/* Thumbnail */}
      <div className="rounded-lg">
        <img
          src={course?.thumbnail}
          alt="course thumbnail"
          className={`${height} w-full rounded-xl object-cover`}
        />
      </div>

      {/* Details */}
      <div className="flex flex-col gap-2 px-1 py-3">
        <p className="text-base sm:text-lg md:text-xl text-richblack-5">
          {course?.courseName}
        </p>
        <p className="text-xs sm:text-sm text-richblack-50">
          {course?.instructor?.firstName} {course?.instructor?.lastName}
        </p>

        <div className="flex items-center gap-2">
          <span className="text-yellow-5 text-sm sm:text-base">
            {avgRatingCount || 0}
          </span>
          <RatingStars Review_Count={avgRatingCount} />
          <span className="text-xs sm:text-sm text-richblack-400">
            {course?.RatingAndReview?.length || 0} Ratings
          </span>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-richblack-5">
          Rs. {course?.price}
        </p>
      </div>
    </div>
  </Link>
</div>

// {/* <div className="w-[50%] flex justify-between">
//   <Link to={`/courses/${course._id}`}>
//     <div>
//       <div className="rounded-lg">
//         <img
//           src={course?.thumbnail}
//           alt="course thumbnail"
//           className={`${height} w-full rounded-xl object-cover`}
//         />
//       </div>
//       <div className="flex flex-col gap-2 px-1 py-3">
//         <p className="text-xl text-richblack-5">{course?.courseName}</p>
//         <p className="text-sm text-richblack-50">
//           {course?.instructor?.firstName} {course?.instructor?.lastName}
//         </p>
//         <div className="flex items-center gap-2">
//           <span className="text-yellow-5">{avgRatingCount || 0}</span>
//           <RatingStars Review_Count={avgRatingCount} />
//           <span className="text-richblack-400">
//             {course?.RatingAndReview?.length || 0} Ratings
//           </span>
//         </div>
//         <p className="text-xl text-richblack-5">Rs. {course?.price}</p>
//       </div>
//     </div>
//   </Link>
// </div> */}

    )
}
export default Course_card;