import React from "react";
import "./Guide.css"

const Guide = ()=>{
    return (
        <section className="guide" id="guide">
            <h3>How it works</h3>
            <div className="cardWrap">
            <div className="guideCard">
                <h2>Create an account</h2>
                <hr/>
                <p>
                    <ul>
                        <li>Sign up and verify your account with your student email</li>
                        <li>Update your page with the required details</li>
                    </ul>
                </p>
            </div>
            <div className="guideCard">
                <h2>Update your skill</h2>
                <hr/>
                <p>
                    <ul>
                        <li>Create a skilll card that you know you are an expert in it</li>
                        <li>you can also search for other’s</li>
                    </ul>
                </p>
            </div>
            <div className="guideCard">
                <h2>Share your skill card</h2>
                <hr/>
                <p>
                    <ul>
                        <li>Upload your card on timeline other users to connect</li>
                        <li>Keep learning and connecting with others</li>
                    </ul>
                </p>
            </div>
            </div>
        </section>
    )
}

export default Guide ;