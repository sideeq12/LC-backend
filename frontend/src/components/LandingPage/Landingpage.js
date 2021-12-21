import React from "react";
import "./landing.css"
import NavStyle from "./nav"
import Welcome from "./welcome"
import Mission from "./mission";
import Guide from "./guide";
import Review from "./Review";
import Partners from "./patners";
import Footer from "./footer";

const LandingPage = ()=>{
    return (
        <div className="squeeze">
            <NavStyle />
            <Welcome />
            <Mission />
            <Guide />
            <Review />
            <Partners />
            <Footer />
        </div>
    )
}
export default LandingPage;