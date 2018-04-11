import React from "react";
import "./MemoryCard.css";

const MemoryCard = props => (
    <div className="col-md-3">
        <div className="card img-container">
            <img alt={props.name} src={props.image} onClick={ () => props.setClicked(props.id) }/>
        </div>
    </div>
);

export default MemoryCard;