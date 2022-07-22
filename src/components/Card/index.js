import React from "react";
import GithubIcon from "../../assets/icons/githubIcon.png";


const Card = props => (
  <div className="card-component">
    <a className="img-container" target="_blank" rel="noopener noreferrer" href={props.url}>
      <img className="card-img" alt=":("href={props.url} src={props.image} />
    </a>
    <div className="card-info-container">
      <h2 className="card-info-title">{props.name}</h2>
      <p className="card-description">{props.description}</p>
      <a className="img-container" target="_blank" rel="noopener noreferrer" href={props.githubUrl}>
        <img className="github-icon" alt=":(" src={GithubIcon} />
      </a>
      <div className="icon-container">
        <p className="icon-title">Built with:</p>
        <img className="icon-image" alt=":(" src={props.tech}  />
        <img className="icon-image" alt=":(" src={props.tech2} />
        <img className="icon-image" alt=":(" src={props.tech3} />
      </div>
    </div>
  </div>
)

export default Card;