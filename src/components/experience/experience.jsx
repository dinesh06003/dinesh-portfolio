import React, { useState } from "react";
import experienceList from "./experienceData";
import Popup from "./popUp";
import "./experience.css";

const Experience = () => {

    const [selectedExperienceData, setSelectedExperienceData] = useState(null);
    const handleMoreClick = (exp) => {
        setSelectedExperienceData(exp);
    }


    const handleClosePopUp = () => {
        setSelectedExperienceData(null);
    }
    return (
        <section className="experience" id="experiences">
            <h1>Experience</h1>
            <div className="flashcard-container">
                {experienceList.map((exp) => (
                    <div className="flashcard" key={exp.id}>
                        <h2>{exp.role}</h2>
                        <h3 className="company-details">{exp.company}</h3>
                        <p>{exp.duration}</p>
                        <p>{exp.shortdescription}</p>
                        <button className="more-button" onClick={() => handleMoreClick(exp)}>know More!</button>
                    </div>
                ))}
            </div>
            <Popup experience={selectedExperienceData} onClose={handleClosePopUp} />
        </section>
    )
}

export default Experience;