import React from "react";


function ConfirmationModal({ModalData}) {
    return (
        <>
  {/* Blurred Background */}
  <div className="absolute h-[91%] w-full backdrop-blur-sm bg-white/30 z-10"></div>

  {/* Modal Box */}
  <div className="absolute z-20 top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 
                  bg-richblack-800 border-4 border-richblack-600 rounded-xl 
                  px-4 py-6 sm:px-6 sm:py-7 md:px-8 md:py-8 lg:px-10 lg:py-9 
                  w-[90%] max-w-[500px] flex flex-col gap-4 text-center">
    
    {/* Title & Description */}
    <div className="flex flex-col gap-2">
      <h1 className="text-xl sm:text-2xl font-semibold">{ModalData?.text1}</h1>
      <p className="text-sm sm:text-base text-richblack-100">{ModalData?.text2}</p>
    </div>

    {/* Action Buttons */}
    <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center">
      <button
        className="bg-yellow-100 font-semibold text-richblack-900 py-2 px-4 rounded-lg w-full sm:w-auto"
        onClick={ModalData?.btn1Handler}
      >
        {ModalData?.btn1Text}
      </button>
      <button
        className="bg-richblack-300 font-semibold text-richblack-900 py-2 px-4 rounded-lg w-full sm:w-auto"
        onClick={ModalData?.btn2Handler}
      >
        {ModalData?.btn2Text}
      </button>
    </div>
  </div>
</>

        // <>
        // <div className=" absolute h-[91%] w-[100%] backdrop-blur-sm bg-white/30  "></div>
        // <div className=" flex flex-col gap-3 py-7 px-8 absolute top-[35%] left-[40%]  bg-richblack-800 border-4 border-richblack-600 rounded-xl ">

        //     <div className="flex gap-2 flex-col">
        //         <h1 className=" text-2xl font-semibold">{ModalData?.text1}</h1>
        //         <p className=" text-richblack-100">{ModalData?.text2}</p>
        //     </div>
        //     <div className="flex gap-3 mt-3">
        //         <button className=" bg-yellow-100 font-semibold text-richblack-900 py-2 px-3 rounded-lg " onClick={ModalData?.btn1Handler}>
        //             {ModalData?.btn1Text}
        //         </button>
        //         <button className=" bg-richblack-300 font-semibold text-richblack-900 py-2 px-3 rounded-lg" onClick={ModalData?.btn2Handler}>
        //             {ModalData?.btn2Text}
        //         </button>
        //     </div>
        // </div>
        // </>
    )
}

export default ConfirmationModal;