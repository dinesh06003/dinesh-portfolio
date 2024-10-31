import React from 'react';
import './about.css';
import user from '../../assets/dinesh.jpeg';
import { FaAward } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa6";
import resume from '../../assets/SaiDineshReddy.pdf';



const About = () => {

  return (
    <section className='about-section' id="about">
      <div className='about-intro'>Get To Know More</div>
      <div className='about-me'>About Me</div>

      <div className='about-container'>
        <div className='img-resume'>
          <img src={user} className='about-img' /><br />
          <a href={resume} className="btn-1" target='__blank'>
            <div class="btn-1-wrapper">
              <div class="text">Download Resume</div>
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
              </span>
            </div>
          </a>
        </div>

        <div className='about-experience'>
          <FaAward className='award' />
          <div className='experience-heading'>Experience</div>
          <div className='experience-details'>3.6 Years of Software Development</div>
        </div>
        <div className='about-education'>
          <FaUserGraduate className='award' />
          <div className='education-heading'>Education</div>
          <div className='education-details'>Masters Degree, Bachelors Degree</div>
        </div>

        <p className='about-description' >As a Master's student with a strong foundation in Software Engineering, I specialize in Java full-stack development. My expertise encompasses designing user-friendly interfaces and developing robust APIs using Spring Boot. This technical proficiency is complemented by a steadfast commitment to crafting scalable and high-performance software solutions. My approach merges cutting-edge technology with innovative design principles to not only meet but exceed project objectives. This ensures that each solution aligns with user expectations and contributes to advancing the frontiers of technology in practical applications.</p>
      </div>

    </section >
  )
}


export default About;
