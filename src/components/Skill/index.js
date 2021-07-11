import React from 'react'

const Skill = props => (
    <div className="skill">
        <img src={props.icon} alt="icon" className="skillIcon"/>
        <h4 className="skillHeader"> {props.title} </h4>
        <div className="skillPercent" style={{ gridColumnEnd: props.value }}></div>
        <p className="percentStart">Very Little</p>
        <p className="percentEnd">Everything</p>
    </div>
)

export default Skill;