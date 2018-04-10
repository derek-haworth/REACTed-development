import React from "react";
import "./MemoryCard.css";

const MemoryCard = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.name}></img>
        </div>
        <p>test test</p>
    </div>
);

export default MemoryCard;