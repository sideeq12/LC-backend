import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import "./NavLink.css"
import menu from "./ordinary.svg"
import close from "./whiteclose.svg"

    

const NavLinks = ()=>{
    const [ToggleMenu, setToggleMenu] = useState(false)
    const [myImage, setMyImage] = useState(menu)
    const [screenWidth, setScreenWidth] = useState( window.innerWidth)
    

 const MenuChange = ()=>{
        setToggleMenu(!ToggleMenu)
 }
 
 useEffect(()=>{
     const changeWidth = ()=>{
        setScreenWidth(window.innerWidth)
     }
     if(ToggleMenu == true){
         setMyImage(close)
     }
     if(ToggleMenu == false){
         setMyImage(menu)
     }
        window.addEventListener("resize", changeWidth)
        return ()=>{
            window.removeEventListener("resize", changeWidth)
        }
 }, [ToggleMenu])

 
    return ( <>
    <img src={myImage} alt="menu icon for learnersConnect" onClick={MenuChange}  className="iconImage" />
    
            { (ToggleMenu || screenWidth >800) && (
                <div className="myNav">
                    <nav>Logo here</nav>
                <ul>
                <li> <Link to="/dashboard">Profile</Link>
                    </li>
                    <li> <Link to="/templatelist">Template list</Link>
                    </li>
                    <li> <Link to="/newskill">New skill</Link>
                    </li>
                    <li> <Link to="/support">Contact support.</Link>
                    </li>
            </ul>
            </div>
            )}
        </>
    )
}

export default NavLinks;