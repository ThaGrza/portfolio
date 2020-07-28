import React from "react";

const Card = props => (
  <div className="card-component">
    <img className="card-img" alt=":(" src={props.image} />
    <p><strong>Tech used: </strong>{props.tech} </p>
    <p><strong>Github:</strong><a target="_blank" rel="nooponer noreferrer" href={props.url}> {props.name}</a> </p>
  </div>
)

export default Card;