import React from "react";
import "./review.css"
let image = "https://s11.favim.com/orig/7/781/7819/78198/curly-hair-black-girl-pretty-girl-Favim.com-7819814.jpg"
let image2 = "https://p1.pxfuel.com/preview/104/634/410/hijab-headscarf-portrait-veil-royalty-free-thumbnail.jpg"
let image3 = "https://media.istockphoto.com/photos/black-and-white-portrait-of-a-friendly-adult-man-picture-id1211615207?b=1&k=20&m=1211615207&s=170667a&w=0&h=a9UrtW2R02aqPIflivtxfUfaVQZuKYEYlJxWEM1lOCk="
const Review = ()=>{
    return (
        <section className="Review">
            <h3>Students Reviews</h3>
            <div className="ReviewList">
                <div className="rev rev0">
                    <img src={image} alt="review LearnersConnect" />
                    <h4>Oluwarotimi Faith</h4>
                    <p>“to get vocational skill easily without stress, this is the best platform”</p>
                </div>
                <div className="rev rev1">
                    <img src={image2} alt="review LearnersConnect" />
                    <h4>Adebowale Praise</h4>
                    <p>“How i wish i diecovered student’s connect early ..”</p>
                </div>
                <div className="rev rev2">
                    <img src={image3} alt="review LearnersConnect" />
                    <h4>Adedoyin Muinat</h4>
                    <p>“I really find this platform helpful through out my part one studies..”</p>
                </div>
            </div>
        </section>
    )
}

export default Review;