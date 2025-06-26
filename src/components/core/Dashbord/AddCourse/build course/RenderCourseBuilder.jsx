import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { RiAddCircleLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { setCourse, setEditCourse, setStep } from "../../../../../slice/courseSlice";
import NestedView from "./NestedView";
import { IoIosArrowBack } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import toast from "react-hot-toast";

import { createSection, updateSection } from "../../../../../services/operations/course";

function RenderCourseBuilder() {
    const {
        register,
        setValue,
        getValues,
        formState: {
            errors,
            isSubmitSuccessful
        },
        handleSubmit
    } = useForm();

    const [editSectionName, setEditSectionName] = useState(null);
    const { course } = useSelector((state) => state.course);
    const [loading, setLoading] = useState(false);
    const { token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    async function onSubmitHandler(data) {
        let result;
        //editSectionName in store sectionId
        if (editSectionName) {
            //update section api
            setLoading(true);
            const response = await updateSection({ name: data.sectionName, sectionID: editSectionName, courseId: course._id },token);
            result = response;
            setLoading(false);
        } else {
            //create new section api
            setLoading(true);
            console.log(course);
            dispatch(createSection({ name: data.sectionName, courseID: course._id }, token));
            setValue('sectionName', "");
            setLoading(false);
        }

        if (result) {
            console.log(result);
            dispatch(setCourse(result));
            localStorage.setItem("course", result);
            setEditSectionName(null);
            setValue('sectionName', "");
        }
    }

    function cancelEditSection() {
        setEditSectionName(null);
        setValue("sectionName", "");
    }

    function goBack() {
        dispatch(setStep(1));
        dispatch(setEditCourse(true));
    }

    function goToNext() {
        if (course.courseContent.length === 0) {
            toast.error("Please add atleast one section")
        }

        if (course.courseContent.some((section) => section.subSection.length === 0)) {
            toast.error("Please add atleast one lecture in each section");
        }

        dispatch(setStep(3));
    }

    const handleChangeEditSectionName = (sectionId, sectionName) => {
        setEditSectionName(sectionId);
        setValue("sectionName", sectionName);
        return;
    }

    return (
        <div className="space-y-8 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6">
  <p className="text-2xl font-semibold text-richblack-5">Course Builder</p>

  {/* create or edit section */}
  <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-4">
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-richblack-5" htmlFor="SectionName">
        Section Name <sup className="text-pink-200">*</sup>
      </label>
      <input
        type="text"
        name="SectionName"
        id="SectionName"
        placeholder="Add a topic to build your course"
        {...register("sectionName", { required: true })}
        className="form-style w-full"
      />
      {errors.sectionName && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">
          Section name is required**
        </span>
      )}
    </div>

    <div className="flex items-end gap-x-4">
      <button
        type="submit"
        className="flex items-center gap-x-2 rounded-md border border-richblack-700 bg-richblack-900 px-4 py-2 text-yellow-50"
      >
        {editSectionName ? "Edit Section Name" : "Create Section"}
        <RiAddCircleLine size={20} className="text-yellow-50" />
      </button>

      {editSectionName && (
        <div
          onClick={cancelEditSection}
          className="cursor-pointer text-sm text-richblack-300 underline"
        >
          Cancel Edit
        </div>
      )}
    </div>
  </form>

  {/* nested view */}
  {course?.courseContent?.length > 0 && (
    <NestedView handleChangeEditSectionName={handleChangeEditSectionName} />
  )}

  {/* back and next btn */}
  <div className="flex justify-end gap-x-3">
    <button
      onClick={goBack}
      className="flex items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900"
    >
      Back
      <IoIosArrowBack />
    </button>
    <button
      onClick={goToNext}
      className="flex items-center gap-x-2 rounded-md bg-yellow-50 py-[8px] px-[20px] font-semibold text-richblack-900"
    >
      Next
      <MdNavigateNext />
    </button>
  </div>
</div>

        // <div>
        //     <p>Course Builder</p>
        //     {/* create or edit section  */}
        //     <form onSubmit={handleSubmit(onSubmitHandler)}>
        //         <div>
        //             <label htmlFor="SectionName">Section Name</label>
        //             <input type="text" name="SectionName" id="SectionName"
        //                 placeholder="Add a topic to build your course"
        //                 {...register("sectionName", { required: true })}
        //                 className=" w-full py-2" />
        //             {
        //                 errors.sectionName && (
        //                     <span>
        //                         Section name is required**
        //                     </span>
        //                 )
        //             }
        //         </div>
        //         <div>
        //             <button type="submit">
        //                 {
        //                     editSectionName ? ("Edit Section Name") : (" Create Section")
        //                 }
        //                 <RiAddCircleLine  />
        //             </button>

        //             {
        //                 editSectionName && (
        //                     <div onClick={cancelEditSection}>
        //                         Cancel Edit
        //                     </div>
        //                 )
        //             }
        //         </div>
        //     </form>

        //     {/* nested view  */}
        //     {
        //         course?.courseContent?.length > 0 && (
        //             <NestedView handleChangeEditSectionName={handleChangeEditSectionName} />
        //         )
        //     }
        //     {/* back and next btn  */}
        //     <div>
        //         <button onClick={goBack}>
        //             Back
        //             <IoIosArrowBack />
        //         </button>
        //         <button onClick={goToNext}>
        //             Next
        //             <MdNavigateNext />
        //         </button>
        //     </div>
        // </div>
    )
}

export default RenderCourseBuilder;