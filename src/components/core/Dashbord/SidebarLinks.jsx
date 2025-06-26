import React from "react";
import { Link, Navigate, matchPath, useLocation } from "react-router-dom";
import * as AllIcon from "react-icons/vsc";


function SidebarLinks({ name, LinkPath, icon }) {
    const location = useLocation();
    const Icon = AllIcon[icon];
    // console.log(name,LinkPath,icon);
    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname)
      }
    
    return (
        <Link to={LinkPath}>
            <div className={` ${matchRoute(LinkPath) ? "bg-yellow-800 text-yellow-50 border-l-[4px]" : "bg-opacity-0 text-richblack-200"} flex gap-2 py-2  pl-5 items-center `}>
                <div>
                    {
                  <Icon/>
                    }
                </div>
                <div>
                    {name}
                </div>
            </div>
         </Link>
    )
}

export default SidebarLinks;