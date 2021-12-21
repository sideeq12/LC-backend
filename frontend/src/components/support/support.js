import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import NavLinks from "../NavLink/navLink";
import "./support.css"
import support from "./support.jpg"


const Support =()=>{
    return (
        <div className="dashboardWrap">
            <NavLinks /> 
            <div className="AboutWrapper">
                <h1>Support Team.</h1>
                <img src={support} alt="support image" />
                <div className="Textabout">
                    <h2>Learners Connect</h2>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
            </div>
    )
}

export default Support;