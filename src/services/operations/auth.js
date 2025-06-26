import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { AuthEndPoints, ResetPassword } from "../apis";
import { setLoading, setToken } from "../../slice/authSlice";
import { setUser } from "../../slice/profileSlice";
import { ResetCart } from "../../slice/cartSlice";



export function sendOtp(email, navigate) {
    return async (dispatch) => {
        dispatch(setLoading(true));
        try {
            const response = await apiConnector("POST", AuthEndPoints.SENDOTP_API, { email: email });
            // console.log("send otp response", response);
            if (!response.data.success) {
                throw new Error(response.data.message)
              }
            toast.success("OTP Sent Successfully");
            navigate("/verify-email")
        } catch (error) {
            toast.error(error.message);
            // console.log(error);
        }
        dispatch(setLoading(false));
    }
}


export function VerifyEmailSignup(
    firstName,
    lastName,
    email,
    password,
    confrimPassword, 
    accountType,
    otp,
    navigate
  ) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", AuthEndPoints.VERIFY_EMAIL , {
            firstName,
            lastName,
            email,
            password,
            confrimPassword,
            accountType,
            otp,
        });
    
  
        console.log("SIGNUP API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        toast.success("Signup Successful")
        navigate("/login")
      } catch (error) {
        console.log("SIGNUP API ERROR............", error)
        toast.error("Signup Failed")
        navigate("/signup")
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }


export function getpasswordResetToken(email, setSendEmail) {
    return async (dispatch) => {
        dispatch(setLoading(true));
        try {
            const response = await apiConnector("POST", ResetPassword.RESETPASSWORDTOKEN, { email })
            setSendEmail(true);
            toast.success(response.message);
        } catch (error) {
            toast.error(error.message);
        }
        dispatch(setLoading(false));
    }
}


export function updatepassword(password, confrimPassword, token) {
    return async (dispatch) => {
        dispatch(setLoading(true));
        try {
            const response = await apiConnector("POST", ResetPassword.RESETPASSWORD, {
                password: password,
                confrimPassword: confrimPassword,
                token: token
            });

            toast.success("Password Reset Successfully")
        } catch (error) {
            toast.error(error.message);
        }
        dispatch(setLoading(false));
    }
}

export function Login(email,password,navigate){
  return async(dispatch)=>{
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try{
        const response = await apiConnector("POST",AuthEndPoints.LOGIN,{email:email,password:password});

        if(!response.data.success){
            throw new Error(response.data.message)
            return
        }
        toast.success("login successfull")
        //set token in auth slice
        dispatch(setToken(response.data.user.token));

        //store user data in profile slice
        const userImage = response.data?.user?.image ? response.data.user.image : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
        dispatch(setUser({...response.data.user,image:userImage}));
        // console.log(response);
        // console.log(response.data.user.token);


        //store USER PROFILE DATA and TOKEN in localStorage
        localStorage.setItem("user",JSON.stringify(response.data.user));
        localStorage.setItem("token",JSON.stringify(response.data.user.token));
        navigate('/');

    }catch(error){
        console.log("LOGIN API ERROR............", error)
        toast.error("Login Failed")
    }
    toast.dismiss(toastId);
    dispatch(setLoading(false))
  }   
}

export function Logout(navigate){
    return (dispatch)=>{
    try{
        dispatch(setToken(null));
        dispatch(setUser(null));
        dispatch(ResetCart());
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        
        toast.success("Logged Out");
        navigate('/')
    }catch(error){
        toast.error("Logout error");
    }
}
}


export function ChangePassword(oldPassword,newPassword,token){
    return async(dispatch)=>{
        const toastId = toast.loading("Loading...");
        try{
            const response = await apiConnector("POST",AuthEndPoints.CHANGEPASSWORD,{
                oldPassword, newPassword
            },{
                Authorization: `Bearer ${token}`,
              });

            if(!response.data.success){
                throw new Error("password on change");
            }

            toast.success("Password Change Successfully")
        }catch(error){
            console.log("erorr while change password",error);
            toast.error(error.message);
        }
        toast.dismiss(toastId);
    }
}