import React from "react";
import { Link } from "react-router-dom";

function CtaButton({ active, linkTO, children }) {
    return (
        <Link
            to={linkTO}
            className={`text-center py-2 sm:py-3 px-3 sm:px-4 font-semibold sm:font-bold rounded-md sm:rounded-lg hover:scale-95 transition-all duration-200 
    text-[12px] sm:text-[13px] md:text-sm 
    ${active ? "bg-yellow-50 text-black" : "bg-richblack-800 text-white"}`}
        >
            {children}
        </Link>

        // <Link to={linkTO} className={`text-center py-3 px-4 font-bold rounded-lg hover:scale-95 transition-all duration-200 text-[13px] ${active?" bg-yellow-50 text-black":"bg-richblack-800 text-white"}`}>
        //     {children}
        // </Link>
    )
}

export default CtaButton;