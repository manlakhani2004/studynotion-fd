import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/core/Dashbord/Sidebar";

function Dashboard(){
    return(
        <div className=" text-white flex gap-3 bg-richblack-900">
            {/* sidebar */}
                <Sidebar/>
            {/* dashboard pages  */}
            <div >
                <Outlet/>
            </div>
        </div>
    )
}

export default Dashboard;