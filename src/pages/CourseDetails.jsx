import { useEffect, useState } from "react"
import { BiInfoCircle } from "react-icons/bi"
import { HiOutlineGlobeAlt } from "react-icons/hi"

import Footer from "../components/common/Footer";
import React from "react";
import { buyCourse } from "../services/operations/studentPaymentAPI";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCourseDetails, getCoursebyid, getcourseFullDetails } from "../services/operations/course";
import ConfirmationModal from "../components/common/ConfrimModal";
import { ACCOUNT_TYPE } from "../utils/constants";
import { AddToCart } from "../slice/cartSlice";
const CourseDetails = () => {
  const { user } = useSelector(state => state.profile);
  const { token } = useSelector(state => state.auth);
  // const { loading } = useSelector((state) => state.profile)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const courseId = useParams();

  const [response, setResponse] = useState(null)
  const [confirmationModal, setConfirmationModal] = useState(null)
  useEffect(() => {
    // Calling fetchCourseDetails fucntion to fetch the details
    ; (async () => {
      try {
        const res = await getCoursebyid(courseId)
        // console.log("course id:",courseId)
        console.log("course details res: ", res.data)
        setResponse(res.data)
        console.log(response)
      } catch (error) {
        console.log("Could not fetch Course Details")
      }
    })()
  }, [courseId])

  if (!response) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }


  const handleAddToCart = () => {
    if (user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR) {
      toast.error("You are an Instructor. You can't buy a course.")
      return
    }
    if (token) {
      dispatch(AddToCart(response))
      return
    }
    setConfirmationModal({
      text1: "You are not logged in!",
      text2: "Please login to add To Cart",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    })
  }
  const {

    courseName,
    courseDescription,
    thumbnail,
    price,
    whatYouWillLearn,
    courseContent,
    ratingAndReviews,
    instructor,
    studentsEnrolled,
    createdAt,
  } = response;



  function handleBuyCourse() {
    // console.log("course id==",courseId.courseId);
    if (token) {
      buyCourse(token, [courseId.courseId], user, navigate, dispatch);
      return;
    }
    setConfirmationModal({
      text1: "You are not logged in!",
      text2: "Please login to Purchase Course.",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    })
  }
  return (
    <div className="text-white">
  <div className="mx-auto box-content px-4 sm:px-6 md:px-8 lg:w-[1260px] 2xl:relative">
    <div className="mx-auto grid min-h-[450px] max-w-full justify-items-center py-8 lg:mx-0 lg:grid-cols-2 lg:justify-items-start lg:py-12 xl:max-w-[1100px]">
      
      {/* Course Thumbnail */}
      <div className="relative block w-full max-w-[600px] max-h-[30rem] ">
        <div className="absolute bottom-0 left-0 h-full w-full shadow-[#161D29_0px_-64px_36px_-28px_inset]"></div>
        <img
          src={thumbnail}
          alt="course thumbnail"
          className="aspect-auto w-full object-cover rounded-lg"
        />
      </div>

      {/* Course Info */}
      <div className="flex flex-col justify-between w-full mt-6 lg:mt-0 lg:ml-20 xl:ml-20">
        <div className="z-30 flex flex-col gap-4 text-base sm:text-lg text-richblack-5 py-4">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-richblack-5">
            {courseName}
          </p>
          <p className="text-richblack-200 text-sm sm:text-base">{courseDescription}</p>
          <div>
            <p className="text-sm sm:text-base">
              Created By {`${instructor.firstName} ${instructor.lastName}`}
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm sm:text-base">
            <p className="flex items-center gap-2">
              <HiOutlineGlobeAlt /> English
            </p>
          </div>
        </div>

        {/* Mobile Price + Buy/Add Cart Buttons */}
        <div className="flex w-full flex-col gap-4 border-y border-y-richblack-500 py-4 lg:hidden">
          <p className="text-2xl sm:text-3xl font-semibold text-richblack-5">
            Rs. {price}
          </p>
          <button className="yellowButton w-full" onClick={handleBuyCourse}>
            Buy Now
          </button>
          <button className="blackButton w-full">Add to Cart</button>
        </div>
      </div>

      {/* Author Info (Visible on lg+) */}
      <div className="hidden lg:block lg:ml-8 lg:mt-6">
        <p className="text-2xl font-semibold mb-4">Author</p>
        <div className="flex items-center gap-4 mb-4">
          <img
            src={
              instructor.image
                ? instructor.image
                : `https://api.dicebear.com/5.x/initials/svg?seed=${instructor.firstName} ${instructor.lastName}`
            }
            alt="Author"
            className="h-14 w-14 rounded-full object-cover"
          />
          <p className="text-lg">{`${instructor.firstName} ${instructor.lastName}`}</p>
        </div>
        <p className="text-sm text-richblack-50">
          {instructor?.additionalDetails?.about}
        </p>
      </div>
    </div>

    {/* Bottom Sticky Section (Large Screens) */}
    <div className="hidden lg:flex flex-col gap-4 rounded-md bg-richblack-700 p-6 text-richblack-5 mt-10">
      <div className="text-3xl font-semibold">Rs. {price}</div>
      <div className="flex gap-6">
        <button
          className="yellowButton bg-yellow-50 text-blue-800 rounded-md py-2 px-4"
          onClick={
            user && response?.studentsEnrolled.includes(user?._id)
              ? () => navigate("/dashboard/enrolled-courses")
              : handleBuyCourse
          }
        >
          {user && response?.studentsEnrolled.includes(user?._id)
            ? "Go To Course"
            : "Buy Now"}
        </button>
        {!user || !response?.studentsEnrolled.includes(user?._id) ? (
          <button
            onClick={handleAddToCart}
            className="blackButton py-2 px-4 bg-caribbeangreen-500 rounded-lg text-white"
          >
            Add to Cart
          </button>
        ) : null}
      </div>
    </div>
  </div>

  <Footer />
  {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
</div>

    // <div className="text-white">

    //   <div className="mx-auto box-content px-4 lg:w-[1260px] 2xl:relative ">
    //     <div className="mx-auto grid min-h-[450px] max-w-maxContentTab justify-items-center py-8 lg:mx-0 lg:justify-items-start lg:py-0 xl:max-w-[810px]">
    //       <div className="relative block max-h-[30rem]">
    //         <div className="absolute bottom-0 left-0 h-full w-full shadow-[#161D29_0px_-64px_36px_-28px_inset]"></div>
    //         <img
    //           src={thumbnail}
    //           alt="course thumbnail"
    //           className="aspect-auto w-full"
    //         />
    //       </div>

    //       <div className="flex justify-between w-full items-center">
    //         <div>
    //           <div
    //             className={`z-30 my-5 flex flex-col justify-center gap-4 py-5 text-lg text-richblack-5`}
    //           >
    //             <div>
    //               <p className="text-4xl font-bold text-richblack-5 sm:text-[42px]">
    //                 {courseName}
    //               </p>
    //             </div>
    //             <p className={`text-richblack-200`}>{courseDescription}</p>
    //             <div className="text-md flex flex-wrap items-center gap-2">
    //               {/* <span className="text-yellow-25">{avgReviewCount}</span> */}
    //               {/* <RatingStars Review_Count={avgReviewCount} Star_Size={24} /> */}
    //               {/* <span>{`(${ratingAndReviews.length} reviews)`}</span>
    //             <span>{`${studentsEnrolled.length} students enrolled`}</span> */}
    //             </div>
    //             <div>
    //               <p className="">
    //                 Created By {`${instructor.firstName} ${instructor.lastName}`}
    //               </p>
    //             </div>
    //             <div className="flex flex-wrap gap-5 text-lg">
    //               {/* <p className="flex items-center gap-2">
    //               {" "}
    //               <BiInfoCircle /> Created at {formatDate(createdAt)}
    //             </p> */}
    //               <p className="flex items-center gap-2">
    //                 {" "}
    //                 <HiOutlineGlobeAlt /> English
    //               </p>
    //             </div>
    //           </div>
    //           <div className="flex w-full flex-col gap-4 border-y border-y-richblack-500 py-4 lg:hidden">
    //             <p className="space-x-3 pb-4 text-3xl font-semibold text-richblack-5">
    //               Rs. {price}
    //             </p>
    //             <button className="yellowButton" onClick={handleBuyCourse}>
    //               Buy Now
    //             </button>
    //             <button className="blackButton">Add to Cart</button>
    //           </div>
    //         </div>
    //         <div className="mb-12 py-4">
    //           <p className="text-[28px] font-semibold">Author</p>
    //           <div className="flex items-center gap-4 py-4">
    //             <img
    //               src={
    //                 instructor.image
    //                   ? instructor.image
    //                   : `https://api.dicebear.com/5.x/initials/svg?seed=${instructor.firstName} ${instructor.lastName}`
    //               }
    //               alt="Author"
    //               className="h-14 w-14 rounded-full object-cover"
    //             />
    //             <p className="text-lg">{`${instructor.firstName} ${instructor.lastName}`}</p>
    //           </div>
    //           <p className="text-richblack-50">
    //             {instructor?.additionalDetails?.about}
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="max-w-[830px] ">

    //       {/* Author Details */}

    //     </div>
    //   </div>
    //   <div
    //     className={`flex flex-col gap-4 rounded-md bg-richblack-700 p-4 text-richblack-5`}
    //   >
    //     <div className="px-4 ">
    //       <div>
    //               {/* <button className=" bg-yellow-50 py-2 px-3 " onClick={handleBuyCourse}>
    //     Buy Now
    //   </button> */}
    //       </div>
    //       <div className="flex gap-10 justify-center  ">
    //         <button
    //           className="yellowButton bg-yellow-50 py-2 text-blue-800 rounded-md px-3"
    //           onClick={
    //             user && response?.studentsEnrolled.includes(user?._id)
    //               ? () => navigate("/dashboard/enrolled-courses")
    //               : handleBuyCourse
    //           }
    //         >
    //           {user && response?.studentsEnrolled.includes(user?._id)
    //             ? "Go To Course"
    //             : "Buy Now"}
    //         </button>
    //         {(!user || !response?.studentsEnrolled.includes(user?._id)) && (
    //           <button onClick={handleAddToCart} className="blackButton py-2 px-3 bg-caribbeangreen-500 rounded-lg text-white">
    //             Add to Cart
    //           </button>
    //         )}
    //       </div>


    //     </div>
    //   </div>
    //   <Footer />
    //   {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    // </div>

  )
}
export default CourseDetails;