import React from "react";
import ReactDOM from "react-dom";

export default function Card(props){
    let badgeText 
    if(props.card.openSpots === 0){
        badgeText= "SOLD OUT"
    }else if(props.card.location === "Online"){
        badgeText = "ONLINE"
    }


    return(
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.card.image} alr="" className="card_img"/>
            <div className="card_stats">
                <img src={`${process.env.PUBLIC_URL}/images/Star 1.png`} alt="" className="star_img" />
                <span>{props.card.rating}</span>
                <span className="grey">({props.card.reviews}) * </span>
                <span className="grey">{props.card.location}</span>
            </div>
            <p className="card-text">{props.card.text}</p>
            <p className="card-price"><span className="bold">From ${props.card.price} / person</span></p>
        </div>
    )
}    