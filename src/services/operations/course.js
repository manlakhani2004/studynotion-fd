import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector"
import { CourseAPI } from "../apis";
import { setCourse, setStep } from "../../slice/courseSlice"

export async function fetchAllCourseCategory() {
    let result = [];
    try {
        const response = await apiConnector("GET", CourseAPI.GETALLCOURSECATEGORY);
        result = response.data.AllCategorys;
    } catch (error) {
        console.log("error while call getallcategory api", error);
    }
    return result;
}

export function createCourse(formdata, token) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
            
            const response = await apiConnector("POST", CourseAPI.CREATCOURSE, formdata, {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            });

            // if(!response.data.success){
            //     throw new Error("error while create course");
            // }

            console.log("course create details", response.data.courseDetails);
            localStorage.setItem("course", response.data.courseDetails)
            dispatch(setCourse(response.data.courseDetails))
            dispatch(setStep(2));
            toast.success("Course Created Successfully");
        } catch (error) {
            toast.error(error.message)
            console.log("error in create course while  api call", error);
        }
        toast.dismiss(toastId);
    }
}

// data = name, courseID
export function createSection(data, token) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("POST", CourseAPI.CREATESECTION, data, {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            });

            dispatch(setCourse(response.data.updatedCourse));
            localStorage.setItem("course", response.data.updatedCourse);
            toast.success("section created successfully");

        } catch (error) {
            console.log("error while create section api call", error);
            toast.error("section not created");
        }
        toast.dismiss(toastId);
    }

}

//data = name, sectionID,courseId
export async function updateSection(data, token) {
    let result;
    const toastId = toast.loading("Loading...");
    try {
        const response = await apiConnector("POST", CourseAPI.UPDATESECTION, data, {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        })

        if (!response.data.success) {
            throw new Error("section is not updated")
        }

        result = response.data.course;
        console.log(response.data.course);
        toast.success("section updated successfully");

    } catch (error) {
        console.log("error while update section api call", error);
        toast.error("section not update");
    }
    toast.dismiss(toastId);
    return result;
}


export async function deleteSection( data ,token) {
    let result;
    try {
        const response = await apiConnector("POST", CourseAPI.DELETESECTION, data, {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        });

        if (!response.data.course) {
            throw new Error("section is not deleted");
        }

        result = response.data.course;
        toast.success("Section is deleted");
    } catch (error) {
        console.log("error while deleting section", error);
        toast.error("section is not delete");
    }
    return result;
}


export async function deleteSubSection(data, token) {
    let result;
    try {
        const response = await apiConnector("POST", CourseAPI.DELETESUBSECTION, data, {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error("subsection not update");
        }
        result = response.data.Updatedsection;
        toast.success("SubSection deleted Successfully");
    } catch (error) {
        console.log("error while delete subsection", error);
        toast.error("subsection not update");
    }
    return result;
}


export async function createSubSection(data,token){
    let result;
    const toastId = toast.loading("Loading...");
    try{
        const response = await apiConnector("POST",CourseAPI.CREATESUBSECTION,data,{
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        });

        if(!response.data.success)
        {
            throw new Error("subsection not create");
        }

        result = response.data.updatedSection;
        toast.success("Sub Section Created");
    }catch(error){
        console.log("error while creating subSection",error.message);
        toast.error("subsection not create");
    }
    toast.dismiss(toastId);
    // console.log(result);
    return result;
}

export async function UpdateSubSection(data,token){
    let result;
    const toastId = toast.loading("Loading...");
    try{
        const response = await apiConnector("POST",CourseAPI.UPDATESUBSECTION,data,{
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        });

        if(!response.data.success)
        {
            throw new Error("subsection not update");
        }

        result = response.data.updatedSection;
        toast.success("Sub Section update");
    }catch(error){
        console.log("error while updating subSection",error);
        toast.error("subsection not update");
    }
    toast.dismiss(toastId);
    return result;
}


export async function editCourseDetails(formdata,token){
    let result;
    const toastId = toast.loading('Loading...');
    try{
        const response = await apiConnector('POST',CourseAPI.EDITCOURSE,formdata,{
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        });
        if(!response.data.success){
            throw new Error("Course not update in operations");
        }
        result = response.data.course;
        toast.success("Course Updated Successfully");
        // console.log("updated course details in editcourse",response.data.course);

    }catch(error){
        console.log("error in upadting course",error);
        toast.error("course not updated");
    }
    toast.dismiss(toastId);
    return result;
}


export async function getInstructorCourses(token){
    let result;
    const toastId = toast.loading("Loading...");
    try{
        const response = await apiConnector("GET",CourseAPI.GETINSTRUCTORCOURSES,null,{
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        });

        if(!response.data.success){
            throw new Error("instructor course not fetch");
        }
        result = response.data.courses; 
        // console.log("hello",result);
    }catch(error){
        console.log("error while fetching instructor course",error);
    }
    toast.dismiss(toastId);
    return result;
}

export async function deleteCourse(courseid){
    try{
        // console.log("course id",courseid);
        const response = await apiConnector("DELETE",CourseAPI.DELETECOURSE,{courseId:courseid});

        if(!response.data.success){
            throw new Error("Course not Delete");
        }
        toast.success("Course Deleted");
    }catch(error){
        toast.error(error.message);
        // console.log("error in delete course",error);
    }
}



export async function getcourseFullDetails(courseId,token){
    let result;
    const toastId = toast.loading("loading...");
    try{
        const response = await apiConnector("POST",CourseAPI.GETCOURSEFULLDETAILS,{
            courseId:courseId
        });

        if(!response.data.success){
            throw new Error("course not found");
        }
        result = response.data.course;
    }catch(error){
        console.log(error);
        toast.error("course not fetched");
    }
    toast.dismiss(toastId);
    return result;
}


export async function getCoursebyid(courseId){
    let result;
    const toastId = toast.loading("Loading...");
    try{

        // console.log("my id is:",courseId)
        const response = await apiConnector("POST",CourseAPI.GETCOURSEBYID,{courseId});
        // console.log("succesed",response)
        if(!response.data.success){
            throw new Error("course not fetch");
        }
        result = response.data; 
        // console.log("hello",result);
    }catch(error){
        console.log("error while fetching course",error);
    }
    toast.dismiss(toastId);
    return result;
}