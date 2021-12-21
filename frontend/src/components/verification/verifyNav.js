import React from "react";
import { Link } from "react-router-dom";


const VerifyNav = ()=>{
    return (
        <div className="veriNav">
            <nav>Logo here</nav>
            <ul>
            <li><Link to="/">Enroll</Link></li>
            <li><Link to="/">FAQ</Link></li>
            <li><Link to="/">Contact Us.</Link></li>
            </ul>
        </div>
    )
}

export default VerifyNav;