import React from "react";
import { useSelector } from "react-redux";


function RenderTotalAmount(){
    const {total} = useSelector((state)=>state.cart);
    return(
        <div className=" border-[2px] border-richblack-600 flex flex-col gap-1 bg-richblack-800 py-5 rounded-lg px-8">
            <p className=" text-sm text-richblack-100">Total:</p>
            <p className=" text-2xl text-yellow-50">Rs. {total}</p>

            <button className=" mt-2 text-black py-2 px-14 w-full bg-yellow-200 rounded-lg">
                Buy Now 
            </button>

        </div>
    )
}
export default RenderTotalAmount;