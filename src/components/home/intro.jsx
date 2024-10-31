import React from "react";
import MouseIcon from './mouse';
import './home.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Hi from '../../assets/Hi.gif';

const Intro = () => {


    return (
        <div className="home-section">
            <div className="home-container">
                <div className="home__title">
                    <img src={Hi} alt='Say Hi' className='hi-icon' />
                    <p>, I'm  <span className="home__name">Sai Dinesh</span></p>
                </div>

                <div className="marquee">
                    <span className="role">Full Stack Java Developer</span>
                </div>
                <div className='home__title'>
                    <span className="home__intro">As a creative designer and developer with a Master's degree in Computer Science, I am deeply passionate and committed to my work. My academic background and creative pursuits meld seamlessly to innovate and build digital solutions that captivate and engage.</span>
                </div>
                <br></br>
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
                </div>

                <a href="#about" className="mouse-container">
                    <div className="scroll-container">
                        <MouseIcon className='mouse-image' />
                        <span className='scroll-down'>Scroll Down</span>
                    </div>
                </a>
            </div>

            <div className="user-icon"></div>
        </div>
    )
}

export default Intro;