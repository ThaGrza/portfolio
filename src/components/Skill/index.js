import React from 'react'

const Skill = props => (
    <div className="skill">
        <h4 className="skillHeader"> {props.title} </h4>
        <div className="skillPercent" style={{ gridColumnEnd: props.value }}></div>
    </div>
)

export default Skill;