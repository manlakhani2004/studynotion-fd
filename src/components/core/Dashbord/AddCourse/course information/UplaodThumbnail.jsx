import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RiUploadCloud2Fill } from "react-icons/ri";

function UplaodThumbnail({ name, id, label, register, setValue, getValues, errors }) {
    const {course}= useSelector((state)=>state.course);
    const InputRef = useRef();
    const [previewImage,setPreviewImage] = useState(null);

    function handleFileClick(event){
        InputRef.current.click();
    }

    function handleImageUpload(event){
        try{
            const file  = event.target.files[0];
            setPreviewImage(file);
            // console.log(previewImage);

        }catch(error){
            console.log("error while upload image",error);
        }

    }

    useEffect(()=>{
        register(name,{required:true})
    },[register])

    useEffect(()=>{
        setValue(name,previewImage);
    },[previewImage]);

    return (
        <div className="flex flex-col space-y-2">
  <label className="text-sm text-richblack-5" htmlFor={name}>
    {label} <sup className="text-pink-200">*</sup>
  </label>

  <div
    onClick={handleFileClick}
    className={'flex min-h-[250px] cursor-pointer items-center justify-center rounded-md border-2 border-dotted border-richblack-500'}
  >
    {previewImage || course?.thumbnail ? (
      <div className="flex w-full flex-col p-6">
        <img
          src={
            previewImage
              ? URL.createObjectURL(previewImage)
              : course.thumbnail
          }
          alt="Course Thumbnail"
          className="h-full w-full rounded-md object-cover"
        />
        <button
          type="button"
          onClick={() => {
            setPreviewImage(null)
            setValue(name, null)
          }}
          className="mt-3 text-richblack-400 underline"
        >
          Cancel
        </button>
      </div>
    ) : (
      <div className="flex w-full flex-col items-center p-6">
        <input
          type="file"
          name={name}
          id={id}
          ref={InputRef}
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />
        <div className="grid aspect-square w-14 place-items-center rounded-full bg-pure-greys-800">
          <RiUploadCloud2Fill className="text-2xl text-yellow-50" />
        </div>
        <p className="mt-2 max-w-[200px] text-center text-sm text-richblack-200">
          Drag and drop an image, or click to{" "}
          <span className="font-semibold text-yellow-50">Browse</span> a file
        </p>
        <ul className="mt-10 flex list-disc justify-between space-x-12 text-center text-xs text-richblack-200">
          <li>Aspect ratio 16:9</li>
          <li>Recommended size 1024x576</li>
          <li>Max 6MB each</li>
        </ul>
      </div>
    )}
  </div>

  {errors[name] && (
    <span className="ml-2 text-xs tracking-wide text-pink-200">
      {label} is required
    </span>
  )}
</div>

        // <div>
        //     <label htmlFor={label}>Course Thumbnail</label>
        //     <div onClick={handleFileClick} className=" w-full h-[200px]  bg-richblack-500">
        //         {
        //             previewImage || course?.thumbnail?(
        //                 (previewImage)?(
        //                     <img src={URL.createObjectURL(previewImage)} alt="" className=" h-full w-full object-cover" />
        //                 ):(
        //                     <img src={course.thumbnail} alt="" className=" h-full w-full object-cover" />
        //                 )
        //             ):(
        //                 <div>
        //                     <RiUploadCloud2Fill />
        //                     <p>Drag and drop an image</p>
        //                     <p>Max 6MB each (12MB for videos)</p>
        //                     <ul>
        //                         <li>Aspect ratio 16:9</li>
        //                         <li>Recommended size 1024x576</li>
        //                     </ul>
        //                 </div>
        //             )
        //         }
        //         <input type="file" name={name} id={id} ref={InputRef}  onChange={handleImageUpload}   style={{display:"none"}}/>
        //         {
        //             errors.name && (
        //                 <div>
        //                     Upload thumbnail is required
        //                     </div>
        //             )
        //         }
        //     </div>
        // </div>
    )

}

export default UplaodThumbnail;