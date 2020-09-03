import React from "react";

const Card = props => (
  <div className="card-component">
    <a target="_blank" rel="noopener noreferrer" href={props.url}>
      <img className="card-img" alt=":(" src={props.image} />
    </a>
    <p><strong>Tech used: </strong>{props.tech} </p>
    <p><strong>Github:</strong><a target="_blank" rel="noopener noreferrer" href={props.githubUrl}> {props.name}</a> </p>
  </div>
)

export default Card;