import React from "react";
import { Link } from "react-router-dom";

const Headnav = ()=>{
    return(
        <div className="headNav"> 
            <nav>Logo here</nav>
            <ul>
            <li><Link to="/">Enroll</Link></li>
            <li><Link to="/">FAQ</Link></li>
            <li><Link to="/">Contact Us.</Link></li>
            </ul>
         </div>
    )
}

export default Headnav;