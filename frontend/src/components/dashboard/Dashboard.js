import React from "react";
import Layout from "./layout" 
import NavLinks from "../NavLink/navLink";
import "./dashboard.css"


const Dashboard =()=>{
    return (
        <div className="dashboardWrap">
            <NavLinks /> 
            <Layout />
            </div>
    )
}

export default Dashboard;