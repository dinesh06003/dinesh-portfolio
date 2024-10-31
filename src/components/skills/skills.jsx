import React from "react";
import "./skills.css";
import SkillsFormatedData from "./SkillsFormatedData";
import skillsData from "./skillsData";


const Skills = () => {
    return (
        <div id="skills">
            <SkillsFormatedData skillsData={skillsData} />
        </div>
    )
}
export default Skills;
