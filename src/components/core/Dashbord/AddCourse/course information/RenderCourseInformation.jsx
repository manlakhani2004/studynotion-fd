import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createCourse, editCourseDetails, fetchAllCourseCategory } from "../../../../../services/operations/course";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import TagsInput from "./TagsInput";
import UplaodThumbnail from "./UplaodThumbnail";
import RequirementField from "./RequirementField";
import { setCourse, setStep } from "../../../../../slice/courseSlice";
import toast from "react-hot-toast";

function RenderCourseInformation() {
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: {
            errors,
            isSubmitSuccessful
        }
    } = useForm();

    const { course, editCourse } = useSelector((state) => state.course);
    const [loading, setLoading] = useState(false);
    const { token } = useSelector((state) => state.auth);
    const [courseCategory, setCourseCategory] = useState([]);
    const dispatch = useDispatch();

    async function fetchAllCategory() {
        setLoading(true);
        const result = await fetchAllCourseCategory();
        setCourseCategory(result);
        setLoading(false);
        console.log(result);
    }
    
    useEffect(() => {
        fetchAllCategory();

        if (editCourse) {
            setValue("courseTitle", course.courseName);
            setValue("courseShortDesc", course.courseDescription);
            setValue("courseBenifits", course.whatYouWillLearn);
            setValue("coursePrice", course.price);
            setValue("courseImage", course.thumbnail);
            setValue("courseTags", course.tag)
            setValue("courseRequirements", course.instructions);
            setValue("courseCategory", course.Category);
        }
    }, []);

    function isFormUpdated(){
        const currentValues = getValues();

        if(currentValues.courseTitle !== course.courseName ||
            currentValues.courseShortDesc !== course.courseDescription ||
            currentValues.courseBenifits !== course.whatYouWillLearn ||
            currentValues.coursePrice !== course.price ||
            currentValues.courseImage !== course.thumbnail ||
            currentValues.courseTags.toString() !== course.tag.toString() ||
            currentValues.courseRequirements.toString() !== course.instructions.toString() ||
            currentValues.courseCategory._id !== course.Category._id 
        )
        return true
        else
        return false;
    }

   async function onsubmit(data) {
        // console.log(data);
        // if edit the course 
        if(editCourse){
            if(isFormUpdated()){
                const currentValues = getValues();
                let formdata = new FormData();

                formdata.append("courseId",course._id);
                if(currentValues.courseTitle !== course.courseName){
                    formdata.append("courseName",formdata.courseTitle);
                }
                if(currentValues.courseShortDesc !== course.courseDescription){
                    formdata.append("courseDescription",formdata.courseShortDesch);
                }
                if(currentValues.courseBenifits !== course.whatYouWillLearn){
                    formdata.append("whatYouWillLearn",formdata.courseBenifits);
                }
                if(currentValues.coursePrice !== course.price){
                    formdata.append("price",formdata.coursePrice);
                }
                if(currentValues.courseImage !== course.thumbnail){
                    formdata.append("thumbnail",formdata.courseImage);
                }
                if(currentValues.courseTags.toString() !== course.tag.toString()){
                    formdata.append("tag",JSON.stringify(formdata.courseTags));
                }
                if(currentValues.courseRequirements.toString() !== course.instructions.toString()){
                    formdata.append("instructions",JSON.stringify(formdata.courseRequirements));
                }
                if(currentValues.courseCategory._id !== course.Category._id){
                    formdata.append("Category",formdata.courseCategory);
                }


                setLoading(true)
                
                const result = await editCourseDetails(formdata,token)
                if(result)
                    {
                        dispatch(setCourse(result));
                        dispatch(setStep(2));
                        toast.success("saved Changes")
                    }
                setLoading(false)
            }else{
                toast.error("No Changes made so Far !!");
            }
        }

        //create new course

        let formdata = new FormData();

        formdata.append("courseName",data.courseTitle);
        formdata.append("courseDescription",data.courseShortDesc);
        formdata.append("whatYouWillLearn",data.courseBenifits);
        formdata.append("price",data.coursePrice);
        formdata.append("thumbnail",data.courseImage);
        formdata.append("tag",JSON.stringify(data.courseTags));
        formdata.append("instructions",JSON.stringify(data.courseRequirements));
        formdata.append("CategoryId",data.courseCategory);
        formdata.append("status","Draft");

        setLoading(true);
        // toast.success("start");
        const result =  dispatch(createCourse(formdata,token));
        // toast.success("end");
    //  console.log("result is",result);
        toast.success("Course created");    
        setLoading(false);
    }


    return (
        <div>
  <form
    onSubmit={handleSubmit(onsubmit)}
    className="space-y-8 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6"
  >
    {/* Course Title */}
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-richblack-5" htmlFor="courseTitle">
        Course Title <sup className="text-pink-200">*</sup>
      </label>
      <input
        type="text"
        id="courseTitle"
        placeholder="Enter Course Title"
        className="form-style w-full p-2"
        {...register("courseTitle", { required: true })}
      />
      {errors.courseTitle && (
        <span className="ml-2 text-xs tracking-wide text-pink-200 ">
          Course Title is required
        </span>
      )}
    </div>

    {/* Course Short Description */}
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-richblack-5" htmlFor="courseShortDesc">
        Course Short Description <sup className="text-pink-200">*</sup>
      </label>
      <textarea
        id="courseShortDesc"
        placeholder="Enter Description"
        className="form-style resize-x-none min-h-[130px] w-full p-2"
        {...register("courseShortDesc", { required: true })}
      />
      {errors.courseShortDesc && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">
          Course Short Description is required
        </span>
      )}
    </div>

    {/* Course Price */}
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-richblack-5" htmlFor="coursePrice">
        Course Price <sup className="text-pink-200">*</sup>
      </label>
      <div className="relative">
        <input
          type="number"
          id="coursePrice"
          placeholder="Enter Course Price"
          className="form-style w-full !pl-12 py-2"
          {...register("coursePrice", { required: true, valueAsNumber: true })}
        />
        <HiOutlineCurrencyRupee className="absolute left-3 top-1/2 inline-block -translate-y-1/2 text-2xl text-richblack-400" />
      </div>
      {errors.coursePrice && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">
          Course Price is required
        </span>
      )}
    </div>

    {/* Course Category */}
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-richblack-5" htmlFor="courseCategory">
        Course Category <sup className="text-pink-200">*</sup>
      </label>
      <select
        id="courseCategory"
        className="form-style w-full py-3 bg-richblack-500"
        {...register("courseCategory", { required: true })}
        defaultValue=""
      >
        <option value="" disabled>
          Select Category
        </option>
        {!loading &&
          courseCategory.map((category, index) => (
            <option key={index} value={category._id}>
              {category.name}
            </option>
          ))}
      </select>
      {errors.courseCategory && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">
          Course Category is required
        </span>
      )}
    </div>

    {/* Tags Input */}
    <TagsInput
      name="courseTags"
      id="courseTags"
      placeholder="Enter tags and press Enter"
      label="courseTags"
      register={register}
      setValue={setValue}
      getValues={getValues}
      errors={errors}
    />

    {/* Upload Thumbnail */}
    <UplaodThumbnail
      name="courseImage"
      id="courseImage"
      label="courseImage"
      register={register}
      setValue={setValue}
      getValues={getValues}
      errors={errors}
    />

    {/* Course Benefits */}
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-richblack-5" htmlFor="courseBenifits">
        Course Benefits <sup className="text-pink-200">*</sup>
      </label>
      <textarea
        id="courseBenifits"
        placeholder="Enter Benefits"
        className="form-style resize-x-none min-h-[130px] w-full p-2"
        {...register("courseBenifits", { required: true })}
      />
      {errors.courseBenifits && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">
          Course Benefits is required
        </span>
      )}
    </div>

    {/* Requirements */}
    <RequirementField
      label="courseRequirements"
      name="courseRequirements"
      register={register}
      setValue={setValue}
      getValues={getValues}
      errors={errors}
    />

    {/* Buttons */}
    <div className="flex justify-end gap-x-2">
      {editCourse && (
        <button
          type="button"
          onClick={() => dispatch(setStep(2))}
          className="flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900"
        >
          Continue without saving
        </button>
      )}
      <button
        type="submit"
        className="flex items-center gap-x-2 rounded-md bg-yellow-50 px-4 py-2 font-semibold text-richblack-900"
      >
        {!editCourse ? "Next" : "Save Changes"}
      </button>
    </div>
  </form>
</div>

        // <div>
        //     <form onSubmit={handleSubmit(onsubmit)}>
        //         {/* coure title  */}
        //         <div>
        //             <label htmlFor="courseTitle">Course Title<sup>*</sup></label>
        //             <input type="text" name="courseTitle" id="courseTitle"
        //                 placeholder="Enter Course Title"
        //                 className=" w-full"
        //                 {...register("courseTitle", { required: true })} />
        //             {
        //                 errors.courseTitle && (
        //                     <div>Course Title is required</div>
        //                 )
        //             }
        //         </div>
        //         {/* course Short Description  */}
        //         <div>
        //             <label htmlFor="courseShortDesc">Course Short Description<sup>*</sup></label>
        //             <textarea name="courseShortDesc" id="courseShortDesc"
        //                 {...register("courseShortDesc", { required: true })}
        //                 className=" min-h-[140px] w-full"
        //                 placeholder="Enter Description"
        //             ></textarea>
        //             {
        //                 errors.courseShortDesc && (
        //                     <div>Course Short Description is Required</div>
        //                 )
        //             }
        //         </div>
        //         {/* Course price  */}
        //         <div className=" relative">
        //             <label htmlFor="coursePrice">Course Price<sup>*</sup></label>
        //             <input name="coursePrice" id="coursePrice"
        //                 placeholder="Enter Course price"
        //                 className=" w-full"
        //                 {...register("coursePrice", { required: true, valueAsNumber: true })} />
        //             <HiOutlineCurrencyRupee className=" absolute  top-1/2 text-richblack-400" />
        //             {
        //                 errors.coursePrice && (
        //                     <div>Course price is required</div>
        //                 )
        //             }

        //         </div>
        //         {/* course category  */}
        //         <div>
        //             <label htmlFor="courseCategory">Course Category<sup>*</sup></label>
        //             <select
        //                 name="courseCategory"
        //                 id="courseCategory"
        //                 {...register("courseCategory", { required: true })}>
        //                 <option value="" defaultChecked disabled>Select Category</option>
        //                 {!loading &&
        //                     courseCategory.map((category, index) => (
        //                         <option key={index} value={category._id}>
        //                             {category.name}
        //                         </option>
        //                     ))
        //                 }
        //             </select>
        //             {
        //                 errors.courseCategory && (
        //                     <div>
        //                         Course Category is required
        //                     </div>
        //                 )
        //             }
        //         </div>

        //         {/* custom components for tags  */}
        //         <TagsInput
        //             name="courseTags"
        //             id="courseTags"
        //             placeholder="Enter tags and press Enter"
        //             label="courseTags"
        //             register={register}
        //             setValue={setValue}
        //             getValues={getValues}
        //             errors={errors}
        //         />

        //         {/* uploading and showing course thumbnail  */}
        //         <UplaodThumbnail
        //             name="courseImage"
        //             id="courseImage"
        //             label="courseImage"
        //             register={register}
        //             setValue={setValue}
        //             getValues={getValues}
        //             errors={errors}
        //         />
        //         {/* course benifits  */}
        //         <div>
        //             <label htmlFor="courseBenifits">Course Benifits</label>
        //             <textarea name="courseBenifits" id="courseBenifits" className=" min-h-[140px] w-full"
        //             placeholder="Enter Benifits"
        //             {...register("courseBenifits",{required:true})}>
        //             </textarea>
        //             {
        //                 errors.courseBenifits && (
        //                     <div>Course Benifits is required </div>
        //                 )
        //             }
        //         </div>

        //         {/* course Requirements  */}
        //         <RequirementField
        //         label="courseRequirements"
        //         name="courseRequirements"
        //         register={register}
        //         setValue={setValue}
        //         getValues={getValues}
        //         errors={errors}/>

        //         <div>
        //             {
        //                 editCourse && (
        //                     <button
        //                     onClick={()=>dispatch(setStep(2))}>Continue without saving</button>
        //                 )
        //             }

        //         <button type="submit">{!editCourse?"Next":"Save Changes" }</button>
        //         </div>
        //     </form>
        // </div>
    )
}

export default RenderCourseInformation;