import React from "react";
import {Link } from "react-router-dom"


const firstNav = ()=>{
    return (
        <ul className="first_nav">
            <li><Link to="/signUp">Enroll</Link> </li>
            <li><Link to="/about">FAQ.</Link></li>
            <li><Link to="/Support">Contact Us</Link></li>
        </ul>
    )
}

export default firstNav;

