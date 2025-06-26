import React, { useState } from "react";
import { sidebarLinks } from "../../../data/dashboard-links";
import SidebarLinks from "./SidebarLinks";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../../services/operations/auth";
import { useNavigate } from "react-router-dom";
import ConfrimModal from "../../common/ConfrimModal";
import { LuLogOut } from "react-icons/lu";
function Sidebar() {

    const { loading: profileLoading, user } = useSelector((state) => state.profile);
    const { loading: authLoading } = useSelector((state) => state.auth);
    const [confrimLogoutModal, setConfrimLogoutModal] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    if (profileLoading || authLoading) {
        return (
            <div className="spinner">
            </div>
        )
    }
    return (
        <div className=" flex flex-col h-[calc(100vh-3.9rem)]  gap-5 min-w-[220px] text-white bg-richblack-800">
            {/* sidebarLinks */}
            <div>
                {sidebarLinks.map((link) => {
                    if (link.type && user?.accountType !== link.type) return null

                    return (
                        <SidebarLinks key={link.id} name={link.name} LinkPath={link?.path} icon={link.icon} />
                    )
                })

                }
            </div>
            {/* line  */}
            <div className=" w-[220px] mx-2  h-[1.5px] bg-richblack-500"></div>

            {/* setting and logout  */}
            <div>
                <SidebarLinks LinkPath={'/dashboard/settings'} name="Settings" icon="VscSettingsGear" />
                <div className="flex gap-2 py-2  pl-5 items-center text-richblack-200">
                    <LuLogOut />
                    <button 
                        onClick={() => {
                            setConfrimLogoutModal({
                                text1: "Are you sure?",
                                text2: "You will be logged out of your account.",
                                btn1Text: "Logout",
                                btn2Text: "Cancel",
                                btn1Handler: () => dispatch(Logout(navigate)),
                                btn2Handler: () => setConfrimLogoutModal(null),
                            })
                        }} >Logout</button>
                </div>

            </div>

            {
                confrimLogoutModal && (
                    <ConfrimModal ModalData={confrimLogoutModal} />
                )
            }

        </div>
    )
}
export default Sidebar;