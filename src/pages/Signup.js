import React from "react";
import Templates from "../components/core/Auth/Templates";
import signup from '../assets/Images/signup.webp'

function Signup(props)
{
    let setIsLogined = props.setIsLogined;

    return(
    <Templates setIsLogined = {setIsLogined}
    heading="join the millions learning to code with StudyNotion for free"
    desc1="Build skills for today, tomorrow, and beylond"
    desc2="Education to future-proof your career"
    formtype="signup"
    img={signup}
    >
    </Templates>
    );
}

export default Signup;