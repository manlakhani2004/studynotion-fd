import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RenderCoursesInCart from "./RenderCoursesInCart";
import RenderTotalAmount from "./RenderTotalAmount";
import thumbnail from "../../../../assets/Images/aboutus2.webp"
import { AddToCart, RemoveToCart, ResetCart } from "../../../../slice/cartSlice";

function Cart() {
    const { totalItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const course = {
        id: 123,
        thumbnail: thumbnail,
        courseName: " The Complete Web Dev Bootcamp From Zero to Hero in Python",
        Category: {
            name: "Full Stack web devlopment"
        },
        price: 500
    }

    useEffect(()=>{
        // dispatch(AddToCart(course))
        // dispatch(RemoveToCart(123));
        // dispatch(ResetCart());
    },[])

    return (
        <div className="text-white w-[75vw] mx-5 my-4">
            <div className="">
                <p className="text-3xl  ">My Wishlist</p>
                {
                    !totalItems == 0 &&
                    <p className=" py-2 text-richblack-100 mt-5">{totalItems} Courses in Cart</p>
                }
            </div>
            <div className="flex gap-6">
                <div>
                    <RenderCoursesInCart />
                </div>
                <div>
                    {
                        !totalItems == 0 &&
                        <RenderTotalAmount />
                    }
                </div>
            </div>
        </div>
    )
}
export default Cart;