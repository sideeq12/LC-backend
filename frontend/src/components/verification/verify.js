import React from "react";
import { Link } from "react-router-dom";
import "./verification.css"
import VerifyNav from "./verifyNav";
const Verify = ()=>{
    return (
        <div className="verify">
            <VerifyNav />
            <h3>Kindly verify input the 4-digit pin sent to <span>sawaheed@oauife.edu.ng</span></h3>
            <div className="pin">
            <input type="tel" />
            <input type="tel" />
            <input type="tel" />
            <input type="tel" />
            </div>
            <Link to="/dashboard" className="veri">Verify</Link>
        </div>
    )
}

export default Verify;