import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./layout" 
import NavLinks from "../NavLink/navLink";
import "./dashboard.css"


const Dashboard =()=>{
    const navigate = useNavigate()
    useEffect(()=>{
        
        if(localStorage.getItem("userInfo") === null){
            navigate("/login")
        }
    })
    return (
        <div className="dashboardWrap">
            <NavLinks /> 
            <Layout />
            </div>
    )
}

export default Dashboard;