import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { CatalogAPI } from "../apis";


export async function getCategoryPageDetails(CategoryId){
    let result = [];
    const toastId = toast.loading("Loading...");
    try{
        const res = await apiConnector("POST",CatalogAPI.GETCATEGORTPAGEDETAILS,{categoryId:CategoryId});

        if(!res.data.success){
            throw new Error("category page data not fetch");
        }

        result = res.data.data;
        // console.log("categoriesi is:",result);
    }catch(error){
        console.log("category page data fetcing error",error);
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
}