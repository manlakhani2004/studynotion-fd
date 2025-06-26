import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector"
import { Profile } from "../apis"
import { setUser } from "../../slice/profileSlice";


export function updateDisplayPicture(token, formData) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        try {
            const response = await apiConnector("PUT",
                Profile.UPDATEPROFILEPICTURE,
                formData,
                {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            );
            console.log(
                "UPDATE_DISPLAY_PICTURE_API API RESPONSE............",
                response
              )

            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            // console.log("updated profile data",response.data.user);
            dispatch(setUser(response.data.user));
            // localStorage.setItem("user",response.data.user);

            toast.success("Profile Picture Updated");

        } catch (error) {
            console.log("UPDATE_DISPLAY_PICTURE_API API ERROR............", error)
            toast.error("Could Not Update Display Picture")
        }
        toast.dismiss(toastId)
    }
}

export function updateProfile(dob,about,gender,contactNumber,token){
    return async(dispatch)=>{
        const toastId = toast.loading("Loading...");
        try{
            const response = await apiConnector("PUT",Profile.UPDATEPROFILE,
                {
                    dob,
                    about,
                    gender,
                    contactNumber
                },
                {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            );

            if(!response.data.success){
                throw new Error("profile not update");
            }

            dispatch(setUser(response.data.UpdatedUser))            
            toast.success("Profile Updated Successfully");
            
        }catch(error){
            console.log("error while updating profile",error);
            toast.error(error.message);
        }
        toast.dismiss(toastId);
    }
}


export async function getEnrolledCourses(token){
    
        const toastId = toast.loading("Loading...");
        let result = [];
        try{
            const response = await apiConnector("GET",Profile.GETENROLLEDCOURSES,null,{
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            },)

            if(!response.data.success){
                throw new Error("get enrolled course not found");
            }

            result = response.data.courses
        }catch(error){
            toast.error('could not find enrolled course');
            console.log(error.message);
        }
        toast.dismiss(toastId)
        return result
}