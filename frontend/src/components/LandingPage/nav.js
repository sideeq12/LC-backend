import React, {useState, useEffect} from "react";
import {Link } from "react-router-dom";
import "./nav.css"
import close  from "./whiteclose.svg"
import menu from "./whitemenu.svg"


const NavStyle = ()=>{

    const [myImage, setMyImage] = useState(menu)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [ToggleMenu, setToggleMenu] = useState(false)

useEffect(()=>{
    const changeWidth = ( )=>{
        setScreenWidth(screenWidth);
    } 
    if(ToggleMenu === true){
        setMyImage(close)
    }
    if(ToggleMenu === false){
        setMyImage(menu)
    }
    window.addEventListener("resize", changeWidth)
        return ()=>{
            window.removeEventListener("resize", changeWidth)
        }
}, [ToggleMenu])
 const changeIcon = ()=>{
     setToggleMenu(!ToggleMenu);
 }

    return (
        <>
        <img src={myImage} alt="styling" className="menuBtn" onClick={changeIcon} />
         <div className="ourNav"><nav>Leaner'sConnect </nav></div>
       {((ToggleMenu || screenWidth>800) && ( <div className="homeNav">
       <ul>
       <li><Link to="/SignUp">Enroll</Link></li>
       <li><Link to="/Reviews">About</Link></li>
       <li><Link to="/contact">Contact Us.</Link></li>
       </ul>
       </div>))} 
        </>
    )
}

export default NavStyle;