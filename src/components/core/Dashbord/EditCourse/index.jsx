import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RenderSteps from "../AddCourse/RenderSteps";
import { getcourseFullDetails } from "../../../../services/operations/course";
import { setCourse, setEditCourse } from "../../../../slice/courseSlice";

function EditCourse(){
    const[loading,setLoading] = useState(false);
    const {courseId} = useParams();
    const {course}= useSelector((state)=>state.course);
    const {token} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();

    async function getcourseDetails(){
        setLoading(true);
        const result = await getcourseFullDetails(courseId,token);
        if(result){
            dispatch(setCourse(result));
            dispatch(setEditCourse(true));
        }
        setLoading(false);
    }
    useEffect(()=>{
        getcourseDetails();
    },[])
    if(loading){
        return(
            <div className="spinner"></div>
        )
    }
    return(
        <div className=" text-white">
            <h1>Edit Course</h1>
            <div>
            {
                course?(
                    <RenderSteps/>
                ):(
                    <h1>Course not found</h1>
                )
            }
            </div>
        </div>
    )
}

export default EditCourse;