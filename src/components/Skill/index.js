import React from 'react'

const Skill = props => (
    <div className="skill">
        <div className="skillHeaderContainer">
            <img src={props.icon} alt="icon" className="skillIcon"/>
            <h4 className="skillHeader"> {props.title} </h4>
        </div>
        <div className="skillPercentOutline">
            <div className="skillPercent" style={{ gridColumnEnd: props.value }}></div>
        </div>
    </div>
);

export default Skill;