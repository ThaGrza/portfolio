import React from "react";

const Card = props => (
  <div className="card-component">
    <img className="card-img" alt=":(" src={props.image} />
    <h4>Tech used: {props.tech} </h4>
    <h4>Github:<a target="_blank" rel="nooponer noreferrer" href={props.url}> {props.name}</a> </h4>
  </div>
)

export default Card;