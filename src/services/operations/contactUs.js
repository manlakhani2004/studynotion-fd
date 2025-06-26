import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector"
import { Contact } from "../apis";


export function ContactUs(firstName,lastName,email,countrycode,contactNumber,message)
{
    return async(dispatch)=>{
      
        try{
            
            // console.log(firstName,lastName,email,countrycode,contactNumber,message);
            const response = await apiConnector("POST",Contact.CONTACTUS,{firstName,lastName,email,countrycode,contactNumber,message});
            
            if(!response.data.success){
                throw new Error("message not send");
            }
            toast.success('Message sent successfully.', {
                style: {
                  border: '1px solid #713200',
                  padding: '16px',
                  color: '#713200',
                },
                iconTheme: {
                  primary: '#713200',
                  secondary: '#FFFAEE',
                },
              });
           
        }catch(error){
            toast.error(error.message);
            console.log(error);
        }
        
    }
}