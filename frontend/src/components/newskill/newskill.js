import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import NavLinks from "../NavLink/navLink";
import "./newskill.css"


const NewSkill =()=>{
    return (
        <div className="dashboardWrap">
            <NavLinks /> 
            <div className="FileWrap">
                <div className="fileCover">
                    <h2>Create a new skill Card</h2>
                    <form>
                        <div className="inputCover">
                            <label for="titile">Title :</label> <br/>
                            <input type="text" required/>
                        </div>
                        <div className="inputCover">
                            <label for="titile">Details:</label> <br/>
                            <textarea></textarea>
                        </div>
                        <div className="inputCover">
                            <label for="titile">choose image</label> <br/>
                            <input type="file"/>
                        </div>
                        <div className="inputCover price">
                            <label for="titile">Price :</label> 
                            <input type="text" required/>
                        </div>
                        <button type="submit">Post template</button>
                    </form>
                </div>
            </div>
            </div>
    )
}

export default NewSkill;