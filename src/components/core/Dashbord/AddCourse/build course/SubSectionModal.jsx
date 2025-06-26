import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { createSubSection, UpdateSubSection } from "../../../../../services/operations/course";
import { setCourse } from "../../../../../slice/courseSlice";
import UploadVideo from "./UploadVideo";
import UplaodThumbnail from "../course information/UplaodThumbnail"
import Upload from "../Upload";

function SubSectionModal({ modalData, setModalData,
    add = false,
    view = false,
    edit = false
}) {

    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);
    const { course } = useSelector((state) => state.course);
    const [loading, setLoading] = useState(false);

    const {
        register,
        setValue,
        getValues,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm();

    useEffect(() => {
        if (view || edit) {
            setValue("lectureTitle", modalData.title);
            setValue("lectureDesc", modalData.description);
            setValue("lectureVideo", modalData.videoUrl);
        }
    }, []);

    function isFormUpdated() {
        const currentValue = getValues();

        if (currentValue.lectureTitle !== modalData.title ||
            currentValue.lectureDesc !== modalData.description ||
            currentValue.lectureVideo !== modalData.videoUrl
        )
            return true
        else
            return false
    }

    async function onsubmit(data) {
        if (view) {
            return;
        }

        if (edit) {
            if (!isFormUpdated) {
                toast.success("No change made to the form")
            } else {
                const currentValue = getValues();
                let formdata = new FormData();

                formdata.append("sectionId", modalData.sectionId);
                formdata.append("subSectionId", modalData._id);

                if (currentValue.lectureTitle !== modalData.title) {
                    formdata.append("title", currentValue.lectureTitle);
                }

                if (currentValue.lectureDesc !== modalData.description) {
                    formdata.append("description", currentValue.lectureDesc);
                }

                if (currentValue.lectureVideo !== modalData.videoUrl) {
                    formdata.append("LectureVideo", currentValue.lectureVideo)
                }

                setLoading(true);

                const result = await UpdateSubSection(formdata, token);
               
                const updatedSection = course?.courseContent.map((section) => section._id === modalData.sectionId ? result : section);

                //updated SubSection data
                if (result) {
                    dispatch(setCourse({ ...course, courseContent: updatedSection },token));
                }

                setModalData(null);
                setLoading(false);
            }
            return;
        }

        //create new subsection
        let formdata = new FormData();
        formdata.append("sectionId", modalData);
        formdata.append("title", data.lectureTitle);
        formdata.append("description", data.lectureDesc);
        formdata.append("LectureVideo", data.lectureVideo);

        setLoading(true);
        const result = await createSubSection(formdata, token);
        // console.log("course info..",course);
        const updatedSection = course?.courseContent.map((section) => section?._id === modalData ? result : section);
        //updatedSubSection data
        if (result) {
            console.log("updatedcourse", { ...course, courseContent: updatedSection })
            dispatch(setCourse({ ...course, courseContent: updatedSection }));
        }
        setModalData(null);
        setLoading(false);
    }

    return (
        <div className="fixed inset-0 z-[1000] !mt-0 grid h-screen w-screen place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
  <div className="my-10 w-11/12 max-w-[700px] rounded-lg border border-richblack-400 bg-richblack-800">
    
    {/* Modal Header */}
    <div className="flex items-center justify-between rounded-t-lg bg-richblack-700 p-5">
      <p className="text-xl font-semibold text-richblack-5">
        {view && "Viewing"} {edit && "Editing"} {add && "Adding"} Lecture
      </p>
      <button onClick={() => !loading ? setModalData(null) : {}}>
        <span className="text-2xl text-richblack-5">X</span>
      </button>
    </div>

    {/* Modal Form */}
    <form onSubmit={handleSubmit(onsubmit)} className="space-y-8 px-8 py-10">

      {/* Lecture Video Upload */}
      <Upload
        name="lectureVideo"
        label="lectureVideo"
        register={register}
        setValue={setValue}
        viewData={view ? modalData.videoUrl : null}
        editData={edit ? modalData.videoUrl : null}
        errors={errors}
        video={true}
      />

      {/* Lecture Title */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="lectureTitle">
          Lecture Title {!view && <sup className="text-pink-200">*</sup>}
        </label>
        <input
          type="text"
          name="lectureTitle"
          id="lectureTitle"
          placeholder="Enter Lecture Title"
          {...register("lectureTitle", { required: true })}
          className="form-style w-full"
          disabled={view || loading}
        />
        {errors.lectureTitle && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Lecture title is required
          </span>
        )}
      </div>

      {/* Lecture Description */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="lectureDesc">
          Lecture Description {!view && <sup className="text-pink-200">*</sup>}
        </label>
        <textarea
          name="lectureDesc"
          id="lectureDesc"
          placeholder="Enter Lecture Description"
          {...register("lectureDesc", { required: true })}
          className="form-style resize-x-none min-h-[130px] w-full"
          disabled={view || loading}
        />
        {errors.lectureDesc && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Lecture Description is required
          </span>
        )}
      </div>

      {!view && (
        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-md bg-yellow-50 px-5 py-2 text-richblack-900 font-semibold"
            disabled={loading}
          >
            {loading ? "Loading..." : edit ? "Save Changes" : "Save"}
          </button>
        </div>
      )}
    </form>
  </div>
</div>

        // <div>
        //     <div>
        //         <p>{view && "Viewing"} {edit && "Editing"} {add && "Adding"} Lecture</p>
        //         <button onClick={() => !loading ? setModalData(null) : {}}>
        //             X
        //         </button>
        //     </div>
        //     <form onSubmit={handleSubmit(onsubmit)}>
                
        //             <Upload
        //                 name="lectureVideo"
        //                 label="lectureVideo"
        //                 register={register}
        //                 setValue={setValue}
        //                 viewData={view ? modalData.videoUrl : null}
        //                 editData={edit ? modalData.videoUrl : null}
        //                 errors={errors}
        //                 video={true} />
                
        //         <div>
        //             <label htmlFor="lectureTitle">Lecture Title<sup>*</sup></label>
        //             <input type="text" name="lectureTitle" id="lectureTitle"
        //                 {...register("lectureTitle", { required: true })}
        //                 placeholder="Enter Lecture Title"
        //                 className=" w-full" />
        //             {
        //                 errors.lectureTitle && (
        //                     <p>Lecture title is required</p>
        //                 )
        //             }
        //         </div>
        //         <div>
        //             <label htmlFor="lectureDesc">Lecture Description<sup>*</sup></label>
        //             <textarea name="lectureDesc" id="lectureDesc"
        //                 {...register("lectureDesc", { required: true })}
        //                 placeholder="Enter Lecture Description"
        //                 className=" w-full h-[120px]" />
        //             {
        //                 errors.lectureDesc && (
        //                     <p>Lecture Description is required</p>
        //                 )
        //             }
        //         </div>

        //         <div>
        //             {
        //                 !view && (
        //                     <button type="submit">
        //                         {loading ? "Loading..." : edit ? "Save Changes" : "Save"}
        //                     </button>
        //                 )
        //             }
        //         </div>
        //     </form>
        // </div>
    )
}


export default SubSectionModal;