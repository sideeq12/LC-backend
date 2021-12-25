import React from "react";
import "./card.css"

const Card = ({image, price, text, link}) =>{
    return (
        <div className="card">
            <img src={image} alt="skill image"/>
            <div className="cardDescription">
                <p>{text} </p>
                <div className="connect">
                    <a href={link}>Chat me up</a>
                    <label>{price}</label>
                </div>
            </div>
        </div>
    )
}

export default Card;