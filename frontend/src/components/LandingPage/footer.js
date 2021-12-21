import React from "react";
import "./footer.css"

const Footer = ()=>{
    return (
        <div className="footer" id="footer">
            <div className="leftText">
                <p>Obafemi Awolowo Uni.
Depart. Computer science.
Group 4, SWEP project.</p>
<p> <ul>Mobile
    <li>+2348113906263 </li>
    <li>+2347010349698</li>
    </ul> 
Mailbox : example@oauife.edu.ng
</p>
            </div>
            <div className="subscribe">
                <h4>Get our latest update through newsletter</h4>
                <input type="text" required/>
                <button type="submit">subscribe</button>
            </div>
        </div>
    )
}

export default Footer;