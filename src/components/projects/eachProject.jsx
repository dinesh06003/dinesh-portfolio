import React, { useContext } from 'react';
import './projects.css';
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaJava, FaAws, FaNodeJs, FaBootstrap } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";
import { TbBrandVite } from "react-icons/tb";
import { SiPostgresql } from "react-icons/si";
import { SiHibernate } from "react-icons/si";


const icons = {
  HTML5: <FaHtml5 />,
  CSS3: <FaCss3Alt />,
  JavaScript: <FaJs />,
  ReactJS: <FaReact />,
  Java: <FaJava />,
  AWS: <FaAws />,
  SpringBoot: <BiLogoSpringBoot />,
  NodeJS: <FaNodeJs />,
  Vite: <TbBrandVite />,
  Postgresql: <SiPostgresql />,
  JPAHibernate: <SiHibernate />,
  Bootstrp: <FaBootstrap />
};

const Project = ({ title, description, techStack, githubLink }) => {

  return (
    <div className='project'>
      <div className="tech-stack">
        <div className="icons">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-icon" title={tech}>
              {icons[tech]}
            </span>
          ))}
        </div>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={githubLink} className='link-button' target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
};

export default Project;

