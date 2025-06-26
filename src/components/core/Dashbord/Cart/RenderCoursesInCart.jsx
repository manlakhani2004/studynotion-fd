import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import ReactStars from "react-rating-stars-component";
import ReactStars from "react-rating-stars-component";
import { FaStar } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RemoveToCart } from "../../../../slice/cartSlice";

function RenderCoursesInCart() {
    const { items,totalItems,total } = useSelector((state) => state.cart);
      useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
    localStorage.setItem('totalItems', JSON.stringify(totalItems));
    localStorage.setItem('total', JSON.stringify(total));
  }, [items, totalItems, total]);
    // console.log(items[0][0].courseName);
    const dispatch = useDispatch()
    return (
        <div className=" border-t-[2px] border-richblack-600">
            {
                (items.length == 0)?(
                    <div className=" w-[100] h-full flex items-center justify-between text-3xl">Your Cart is Empty</div>
                ) : (
                    <div className="flex gap-2 w-[50vw] flex-col">  
                        {
                            items.map((course, index) => (
                                
                                <div key={index} className="flex items-center gap-7 mt-2 justify-between w-full py-4 border-b-[2px] border-richblack-600">
                                    <div className=" w-[200px]">
                                        <img src={course?.thumbnail} alt="" className=" rounded-md" />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <p className=" text-richblack-5 w-[80%]">{course?.courseName}</p>
                                        <p className=" text-richblack-100 text-sm"> {course?.Category?.name}</p>
                                        <div className="flex gap-2 items-center">
                                            <span className="text-richblack-100">4.5</span>
                                            
                                            <ReactStars
                                                count={5}
                                                // value={course?.ratingAndReviews.length || 0}
                                                value={2}
                                                size={20}
                                                edit={false}
                                                activeColor="#ffd700"
                                                emptyIcon={<FaStar />}
                                                fullIcon={<FaStar />}
                                            />
                                            <span className="text-richblack-400">
                                                {/* {course?.ratingAndReviews.length || 0}  */}
                                                Review Count
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col  justify-end gap-3">
                                         
                                        <button
                                        onClick={() => dispatch(RemoveToCart(course._id))}
                                         className=" flex gap-1 items-center py-[5px] rounded-lg px-2  bg-richblack-800 text-[#EF0107]">
                                            <RiDeleteBin6Line />
                                            <span>Remove</span>
                                        </button>
                                        <p className=" text-xl text-yellow-100">Rs. {course?.price}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>                    
                )
            }
        </div>
    )
}

export default RenderCoursesInCart