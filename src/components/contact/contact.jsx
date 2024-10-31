import React from 'react';
import './contact.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import resume from '../../assets/SaiDineshReddy.pdf';


const Contact = () => {

    return (
        <div className="contact-container">
            <h1 className="contact-title">Hire Me!</h1>
            <div className="contact-content">

                <div className="button-container">
                    <a href={resume} className="btn-1" target='__blank'>
                        <div class="btn-1-wrapper">
                            <div class="text">Download Resume</div>
                            <span class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                            </span>
                        </div>
                    </a>
                </div>
                <div className="icon-container">
                    <a href="mailto:dinesh.ykbf53@gmail.com" className="icon-link" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope color='black' />
                    </a>
                    <a href="https://www.linkedin.com/in/dinesh020771/" className="icon-link" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin color='black' />
                    </a>
                    <a href="https://github.com/dinesh06003" className="icon-link" target="_blank" rel="noopener noreferrer">
                        {/* <FontAwesomeIcon icon={faGithub} color='black' /> */}
                        <FaGithub color='black' />
                    </a>
                    <a href="https://leetcode.com/u/dinesh663300/" className="icon-link" target="_blank" rel="noopener noreferrer">

                        <SiLeetcode color='black' />

                    </a>
                </div>
            </div>
            <div className="citation">
                <p>&copy; 2024 Sai Dinesh Reddy. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Contact;
