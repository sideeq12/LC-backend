import React from "react";
import { Link} from "react-router-dom";
import phone from "./phone.svg"
import "./welcome.css"

const Welcome = ()=>{
    return (
        <section className="welcome">
        <div className="textSection">
             <h1>Na person  wey wan help me with skills i  wan dey follow chat now.</h1>
             <p>Make impact by sharing knowledge and  skill with your colleagues</p>
             <Link to="/signup">Get started</Link>
        </div>    
        <div className="imageSection">
             <img src={phone} alt="Learners connect welcome image" />
        </div>
        </section>
    )
}

export default Welcome;