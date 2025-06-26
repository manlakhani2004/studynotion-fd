const BASE_URL = "http://localhost:4000/api/v1";

export const categories = {
    CATEGORIES_API:BASE_URL + "/course/showAllCategories"
}

export const ResetPassword = {
    RESETPASSWORDTOKEN:BASE_URL + "/auth/reset-password-token",
    RESETPASSWORD:BASE_URL+"/auth/reset-password"
}

export const AuthEndPoints = {
    SENDOTP_API: BASE_URL + "/auth/sendotp",
    VERIFY_EMAIL:BASE_URL +"/auth/signup",
    LOGIN:BASE_URL+"/auth/login",
    CHANGEPASSWORD:BASE_URL+"/auth/changepassword"
}

export const Contact = {
    CONTACTUS: BASE_URL+ "/reach/contactus"
}

export const Profile = {
    UPDATEPROFILEPICTURE:BASE_URL+"/profile/updateDisplayPicture",
    UPDATEPROFILE:BASE_URL+"/profile/updateProfile",
    GETENROLLEDCOURSES:BASE_URL+"/profile/getEnrolledCourses"
}

export const CourseAPI = {
    GETALLCOURSECATEGORY:BASE_URL+"/course/showAllCategories",
    CREATCOURSE:BASE_URL+"/course/createCourse",
    CREATESECTION:BASE_URL+"/course/addSection",
    UPDATESECTION:BASE_URL+"/course/updateSection",
    DELETESECTION:BASE_URL+"/course/deleteSection",
    DELETESUBSECTION:BASE_URL+"/course/deleteSubSection",
    CREATESUBSECTION:BASE_URL+"/course/addSubSection",
    UPDATESUBSECTION:BASE_URL+"/course/updateSubSection",
    EDITCOURSE:BASE_URL+"/course/editCourse",
    GETINSTRUCTORCOURSES:BASE_URL+"/course/getInstructorCourses",
    DELETECOURSE:BASE_URL+"/course/deleteCourse",
    GETCOURSEFULLDETAILS:BASE_URL+"/course/getFullCourseDetails",
    GETCOURSEBYID:BASE_URL+"/course/getCourseById"
}

export const CatalogAPI = {
    SHOWALLCATEGORY:BASE_URL+"/course/showAllCategories",
    GETCATEGORTPAGEDETAILS:BASE_URL+"/course/getCategoryPageDetails"
}


// student EndPoints
export const studentEndPoint = {
    COURSE_PAYMENT_API:BASE_URL+"/payment/capturePayment",
    COURSE_VERIFY_API:BASE_URL+"/payment/verifyPayment",
    SEND_PATMENT_SUCCESS_EMAIL_API:BASE_URL+"/payment/sendPaymentSuccessEmail" 
}