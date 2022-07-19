import React from "react";
import GithubIcon from "../../assets/icons/githubIcon.png";


const Card = props => (
  <div className="card-component">
    <a className="img-container" target="_blank" rel="noopener noreferrer" href={props.url}>
      <img className="card-img" alt=":(" src={props.image} />
    </a>
    <div className="card-info-container">
      <h2 className="card-info-title">{props.name}</h2>
      <p className="card-description">{props.description}</p>
      <div className="icon-container">
        <img className="icon-image" alt=":(" src={props.tech} />
        <img className="icon-image" alt=":(" src={props.tech2} />
        <img className="icon-image" alt=":(" src={props.tech3} />
        <img className="icon-image" alt=":(" src={props.tech4} />
      </div>
      <img className="github-icon" alt=":(" href={props.githubUrl} src={GithubIcon} />

    </div>
  </div>
)

export default Card;