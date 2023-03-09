import React from "react";
import GithubIcon from "../../assets/icons/githubIcon.png";
import "./style.css";

interface Website {
  url?: string;
  image?: string;
  name?: string;
  description: string;
  githubUrl: string;
  tech: string;
  tech2: string;
  tech3: string;
}

const Card = (props: Website) => (
  <div className="card-component">
    <a
      className="card-img-container"
      target="_blank"
      rel="noopener noreferrer"
      href={props.url}
    >
      <img
        className="card-img"
        alt="View Website"
        href={props.url}
        src={props.image}
      />
    </a>
    <div className="card-info-container">
      <h2 className="card-info-title">{props.name}</h2>
      <p className="card-description">{props.description}</p>
    </div>
    <a
      className="github-icon-container"
      target="_blank"
      rel="noopener noreferrer"
      href={props.githubUrl}
    >
      <img className="github-icon" alt="Github" src={GithubIcon} />
    </a>
    <div className="icon-container">
      <p className="icon-title">Built with:</p>
      <img className="icon-image" alt=":(" src={props.tech} />
      <img className="icon-image" alt=":(" src={props.tech2} />
      <img className="icon-image" alt=":(" src={props.tech3} />
    </div>
  </div>
);

export default Card;
