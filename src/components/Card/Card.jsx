import React from "react";
import "./Card.scss";

const Card = (cardInfo) => {
  const { title, url, image } = cardInfo
  return <div className="card">
  <h2>{title}</h2>
  <a href={url}>Book now!</a>
  <img src={image} alt={title}></img>
  </div>
};

export default Card;
