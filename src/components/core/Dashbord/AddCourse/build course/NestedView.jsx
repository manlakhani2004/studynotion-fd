import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxDropdownMenu } from "react-icons/rx";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlinePlusCircle } from "react-icons/ai";
import SubSectionModal from "./SubSectionModal";
import ConfrimModal from "../../../../common/ConfrimModal";
import { deleteSection, deleteSubSection } from "../../../../../services/operations/course";
import { setCourse } from "../../../../../slice/courseSlice";

function NestedView({ handleChangeEditSectionName }) {
    const [addSubSection, setAddSubSection] = useState(null);
    const [editSubSection, setEditSubSection] = useState(null);
    const [viewSubSection, setViewSubSection] = useState(null);

    const [confrimModal, setConfrimModal] = useState(null);

    const { token } = useSelector((state) => state.auth);
    const { course } = useSelector((state) => state.course);
    const dispatch = useDispatch();

   async function handleDeleteSection(sectionId) {
        // sectionID, courseID
        const result = await deleteSection({ sectionID: sectionId, courseID: course._id }, token);
        // console.log(sectionId,course._id);
        if (result) {
            dispatch(setCourse(result));
        }
        setConfrimModal(null);
    }

    async function handleDeleteSubSection(subSectionId, sectionId) {
        // 
        const result = await deleteSubSection({ subsectionId: subSectionId, sectionId: sectionId, courseId: course._id },token);
        if (result) {
            const updatedSection = course?.courseContent.map((section)=>section._id === sectionId?result:section );
            dispatch(setCourse({...course,courseContent:updatedSection}));
        }
        setConfrimModal(null);
    }

    return (
        <div className="rounded-lg bg-richblack-700 p-6 px-8" id="nestedViewContainer">
  {course?.courseContent?.map((section) => (
    <details key={section._id} open>
      {/* Section Header */}
      <summary className="flex cursor-pointer items-center justify-between border-b-2 border-b-richblack-600 py-2">
        <div className="flex items-center gap-x-3">
          <RxDropdownMenu className="text-2xl text-richblack-50" />
          <p className="font-semibold text-richblack-50">{section?.sectionName}</p>
        </div>
        <div className="flex items-center gap-x-3">
          <button onClick={() => handleChangeEditSectionName(section._id, section.sectionName)}>
            <MdModeEdit className="text-xl text-richblack-300" />
          </button>
          <button
            onClick={() =>
              setConfrimModal({
                text1: "Delete this section",
                text2: "All the lectures in this section will be deleted",
                btn1Text: "Delete",
                btn2Text: "Cancel",
                btn1Handler: () => handleDeleteSection(section._id),
                btn2Handler: () => setConfrimModal(null),
              })
            }
          >
            <RiDeleteBin6Line className="text-xl text-richblack-300" />
          </button>
          <span className="font-medium text-richblack-300">|</span>
          <IoMdArrowDropdown className="text-xl text-richblack-300" />
        </div>
      </summary>

      {/* Subsections */}
      <div className="px-6 pb-4">
        {section.subSection.map((data) => (
          <div
            key={data._id}
            onClick={() => setViewSubSection(data)}
            className="flex cursor-pointer items-center justify-between gap-x-3 border-b-2 border-b-richblack-600 py-2"
          >
            <div className="flex items-center gap-x-3 py-2">
              <RxDropdownMenu className="text-2xl text-richblack-50" />
              <p className="font-semibold text-richblack-50">{data?.title}</p>
            </div>
            <div onClick={(e) => e.stopPropagation()} className="flex items-center gap-x-3">
              <button onClick={() => setEditSubSection({ ...data, sectionId: section._id })}>
                <MdModeEdit className="text-xl text-richblack-300" />
              </button>
              <button
                onClick={() =>
                  setConfrimModal({
                    text1: "Delete this Sub section",
                    text2: "Selected Lactute will deleted",
                    btn1Text: "Delete",
                    btn2Text: "Cancel",
                    btn1Handler: () => handleDeleteSubSection(data._id, section._id),
                    btn2Handler: () => setConfrimModal(null),
                  })
                }
              >
                <RiDeleteBin6Line className="text-xl text-richblack-300" />
              </button>
              <span className="font-medium text-richblack-300">|</span>
              <IoMdArrowDropdown className="text-xl text-richblack-300" />
            </div>
          </div>
        ))}

        {/* Add Lecture Button */}
        <button
          onClick={() => setAddSubSection(section._id)}
          className="mt-3 flex items-center gap-x-1 text-yellow-50"
        >
          <AiOutlinePlusCircle className="text-lg" />
          <p>Add Lecture</p>
        </button>
      </div>
    </details>
  ))}

  {/* SubSection Modals */}
  {addSubSection ? (
    <SubSectionModal modalData={addSubSection} setModalData={setAddSubSection} add={true} />
  ) : viewSubSection ? (
    <SubSectionModal modalData={viewSubSection} setModalData={setViewSubSection} view={true} />
  ) : editSubSection ? (
    <SubSectionModal modalData={editSubSection} setModalData={setEditSubSection} edit={true} />
  ) : (
    <></>
  )}

  {/* Confirmation Modal */}
  {confrimModal && <ConfrimModal ModalData={confrimModal} />}
</div>

        // <div className=" text-white">
        //     <div>
        //         {
        //             course?.courseContent?.map((section) => {
        //                 return (
        //                     <details key={section._id} open className="flex gap-2">
        //                         <summary className="flex gap-2">
        //                             <div>
        //                                 <RxDropdownMenu />
        //                                 <p>{section?.sectionName}</p>
        //                             </div>
        //                             <div>
        //                                 <button 
        //                                     onClick={() => handleChangeEditSectionName(section._id, section.sectionName)}>
        //                                     <MdModeEdit />
        //                                 </button>
        //                                 <button
        //                                     onClick={() => setConfrimModal({
        //                                         text1: "Delete this section",
        //                                         text2: "All the lectures in this section will be deleted",
        //                                         btn1Text: "Delete",
        //                                         btn2Text: "Cancel",
        //                                         btn1Handler: () => handleDeleteSection(section._id),
        //                                         btn2Handler: () => setConfrimModal(null)
        //                                     })}>
        //                                     <RiDeleteBin6Line />
        //                                 </button>
        //                                 <p>|</p>
        //                                 <div>
        //                                     <IoMdArrowDropdown />
        //                                 </div>
        //                             </div>
        //                         </summary>

        //                         {/* subsection  */}
        //                         <div>
        //                             {
        //                                 section.subSection.map((data) => (
        //                                     <div key={data._id}
        //                                         onClick={()=>setViewSubSection(data)}>
        //                                         <div>
        //                                             <RxDropdownMenu />
        //                                             <p>{data?.title}</p>

        //                                         </div>
        //                                         <div onClick={(e)=>e.stopPropagation()}>
        //                                             <button
        //                                                 onClick={() => setEditSubSection({ ...data, sectionId: section._id })}>
        //                                                 <MdModeEdit />
        //                                             </button>
        //                                             <button
        //                                                 onClick={() => setConfrimModal({
        //                                                     text1: "Delete this Sub section",
        //                                                     text2: "Selected Lactute will deleted",
        //                                                     btn1Text: "Delete",
        //                                                     btn2Text: "Cancel",
        //                                                     btn1Handler: () => handleDeleteSubSection(data._id, section._id),
        //                                                     btn2Handler: () => setConfrimModal(null)
        //                                                 })}>
        //                                                 <RiDeleteBin6Line />
        //                                             </button>
        //                                             <p>|</p>
        //                                             <div>
        //                                                 <IoMdArrowDropdown />
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                 ))
        //                             }
        //                             {/* add lecture  */}
        //                             <div>
        //                                 <button
        //                                     onClick={()=>setAddSubSection(section._id)}>
        //                                     <AiOutlinePlusCircle />
        //                                     <p>Add Lecture</p>
        //                                 </button>
        //                             </div>
        //                         </div>

        //                     </details>
        //                 )
        //             })
        //         }
        //     </div>

        //     {
        //         addSubSection ? (
        //             <SubSectionModal
        //             modalData={addSubSection}
        //             setModalData={setAddSubSection}
        //             add={true} />
        //         ): 
        //         viewSubSection ? (
        //             <SubSectionModal
        //             modalData={viewSubSection}
        //             setModalData={setViewSubSection}
        //             view={true}
        //             />
        //         ):
        //         editSubSection ? (
        //             <SubSectionModal 
        //             modalData={editSubSection}
        //             setModalData={setEditSubSection}
        //             edit={true}/>
        //         ):(<div></div>)
        //     }

        //     {
        //         confrimModal &&
        //         (
        //             <ConfrimModal
        //                 ModalData={
        //                     confrimModal
        //                 } />
        //         )
        //     }
        // </div>
    )
}

export default NestedView;