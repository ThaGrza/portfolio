import React from "react";

interface Language {
  icon?: string;
  title?: string;
  value?: number;
}

const Skill = (props: Language) => (
  <div className="skill">
    <div className="skillHeaderContainer">
      <img src={props.icon} alt="icon" className="skillIcon" />
      <h4 className="skillHeader"> {props.title} </h4>
    </div>
    <div className="skillPercentOutline">
      <div
        className="skillPercent"
        style={{ gridColumnEnd: props.value }}
      ></div>
    </div>
  </div>
);

export default Skill;
