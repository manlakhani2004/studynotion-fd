import React from "react";
import UpdateProfilePicture from "./UpdateProfilePicture";
import UpdateProfile from "./UpdateProfile";
import Changepassword from "./ChangePassword";

function Settings(){
    return(
        <div className=" w-[50vw] mx-auto flex flex-col justify-end ml-14 mt-10">
            <UpdateProfilePicture/>
            <UpdateProfile/>
            <Changepassword/>
            {/* Todo:DeleteAcount  */}
        </div>
    )
}

export default Settings;