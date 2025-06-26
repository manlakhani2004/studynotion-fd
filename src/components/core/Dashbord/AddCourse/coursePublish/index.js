import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { resetCourse, setStep } from "../../../../../slice/courseSlice";
import { COURSE_STATUS } from "../../../../../services/utils/constants";
import { useNavigate } from "react-router-dom";
import { editCourseDetails } from "../../../../../services/operations/course";


function RenderPublish() {
    const { register, setValue, getValues, handleSubmit } = useForm();
    const { token } = useSelector((state) => state.auth);
    const { course } = useSelector((state) => state.course);
    const [loading, setLoading] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (course.status === COURSE_STATUS.PUBLISHED) {
            setValue('public', true);
        }
    }, []);

    function goToCourse(){
        dispatch(resetCourse());
        navigate('/dashboard/my-courses');
    }
    function onSubmit(data) {
        //check form is update or not
        if (course.status === COURSE_STATUS.PUBLISHED && getValues("public") === true ||
            course.status === COURSE_STATUS.DRAFT && getValues("public") === false) {
                goToCourse();
                return;
        }

        const formData = new FormData();
        formData.append("courseId",course._id);
        const courseStatus = getValues('public') ? COURSE_STATUS.PUBLISHED : COURSE_STATUS.DRAFT;
        formData.append("status",courseStatus);
        const result = editCourseDetails(formData,token);

        if(result){
            goToCourse();
        }
    }

    function goToBack() {
        dispatch(setStep(2));
    }
    return (
        <div className="rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6">
  <p className="text-2xl font-semibold text-richblack-5">
    Publish Course
  </p>
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="my-6 mb-8">
      <label htmlFor="publish" className="inline-flex items-center text-lg">
        <input
          type="checkbox"
          id="publish"
          {...register('public')}
          className="border-gray-300 h-4 w-4 rounded bg-richblack-500 text-richblack-400 focus:ring-2 focus:ring-richblack-5"
        />
        <span className="ml-2 text-richblack-400">
          Make this course as Public
        </span>
      </label>
    </div>

    <div className="ml-auto flex max-w-max items-center gap-x-4">
      <button
        disabled={loading}
        type="button"
        onClick={goToBack}
        className="flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900"
      >
        Back
      </button>

      <button
        type="submit"
        disabled={loading}
        className="rounded-md bg-yellow-50 px-5 py-2 font-semibold text-richblack-900"
      >
        Save Changes
      </button>
    </div>
  </form>
</div>

        // <div className=" text-white  bg-richblack-700 py-3 px-4 border-1 border-richblack-200">
        //     <p>Publish Course</p>
        //     <form onSubmit={handleSubmit(onSubmit)}>
        //         <div>
        //             <label htmlFor="publish">
        //                 <input
        //                     type="checkbox"
        //                     {...register('public')}
        //                     id="publish" />
        //                 <span className=" mx-2">
        //                     Make this course as Public
        //                 </span>
        //             </label>
        //         </div>

        //         <div className="flex gap-3">
        //             <button
        //                 disabled={loading}
        //                 type="button"
        //                 onClick={goToBack}>
        //                 Back
        //             </button>

        //             <button type="submit"
        //                 disabled={loading}>
        //                 Save Changes
        //             </button>
        //         </div>
        //     </form>
        // </div>
    )
}

export default RenderPublish;