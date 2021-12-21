import React from "react";
import SignUp from "./signUp";
import image from "./sign_up.png"
import "./first_Sign.css"
import Headnav from "./Headnav";


const First_Sign = ()=>{
    return (
        <div className="CoverPage">
            <Headnav />
            <div className="cover">
                <div className="imageSignUp">
                    <img src={image} alt="learner's connect image sign up"/>
                    <p>The first networking platform for student’s on campus, where you showcase your
                         knowledge, to peer-to-peer learning, </p>
                </div>
                <SignUp />
            </div>
        </div>
    )
}

export default First_Sign;