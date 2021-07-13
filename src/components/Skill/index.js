import React from 'react'

const Skill = props => (
    <div className="skill">
        <img src={props.icon} alt="icon" className="skillIcon"/>
        <h4 className="skillHeader"> {props.title} </h4>
        <div className="skillPercentOutline">
            <div className="skillPercent" style={{ gridColumnEnd: props.value }}></div>
        </div>
    </div>
);
    // WRAP SKILLPERCENT IN DIV AND HAVE BORDERS FOR PARENT

export default Skill;