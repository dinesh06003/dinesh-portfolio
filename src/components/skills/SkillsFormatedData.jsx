import React from 'react';
import './skills.css';
import { LuBadgeCheck } from "react-icons/lu";

const SkillsFormatedData = ({ skillsData }) => {
  return (
    <section className='skills-section'>
      <h2 className='section-title'>Skills</h2>
      <span className='section-subtitle'>My Technical Levels</span>
      <div className="skills-container ">
        {skillsData.map((category, index) => (
          <div key={index} className="skills-category">
            <h2 className="category-title">{category.category}</h2>
            <div className="skills-grid">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-card">
                  <LuBadgeCheck className='badge' />
                  <div>
                    <h3 className='skill-name'> {skill.name}</h3>
                    <p className='skill-level '>{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsFormatedData;
