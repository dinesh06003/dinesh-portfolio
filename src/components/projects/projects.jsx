import React from 'react';
import './projects.css';
import Project from './eachProject';

const projectsData = [
  {
    id: 1,
    title: 'My Portfolio Using React +Vite',
    description: 'I developed a dynamic portfolio using HTML, CSS, JavaScript, React, and Vite, alongside various libraries. This portfolio showcases responsive design, seamless navigation, and interactive features, effectively highlighting my skills and projects through a modern, user-friendly interface optimized for performance and cross-platform compatibility.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'Vite'],
    githubLink: 'https://github.com/dinesh06003/dinesh-portfolio'
  },
  {
    id: 2,
    title: 'Job Portal Project Backend',
    description: 'This job portal backend, built with Spring Boot, Hibernate JPA, and PostgreSQL, features a comprehensive REST API for job management tasks. It enables dynamic posting of job openings, detailed searches by title, location, and skills, and facilitates the deletion and status updates of job listings—from "Open" to "Closed"—to ensure the platform stays current and meets both user and administrative requirements efficiently.',
    techStack: ['SpringBoot', 'Postgresql', 'Java', 'JPAHibernate'],
    githubLink: 'https://github.com/dinesh06003/JobPortalProjectBackEnd'
  },
  {
    id: 3,
    title: 'Job Portal Project UI',
    description: 'This Job Portal UI, crafted with HTML, CSS, ReactJS, Bootstrap, and jQuery, offers a responsive interface for a backend API, streamlining job searches, applications, and user management. It uses Bootstrap for uniform styling and jQuery for dynamic updates, ensuring a seamless user experience. This platform efficiently connects job seekers with employers, optimizing the recruitment process.',
    techStack: ['HTML5', 'CSS3', 'ReactJS', 'JavaScript', 'Bootstrp'],
    githubLink: 'https://github.com/dinesh06003/JobPortalProjectUI'
  },
  {
    id: 4,
    title: 'Ecom Project',
    description: 'This e-commerce project utilizes HTML, CSS, and ReactJS for the frontend, with Java, Spring Boot, Hibernate JPA, PostgreSQL, and REST APIs powering the backend. It features essential e-commerce capabilities like adding products with images, robust search functions, product updates, and deletion options. A secure checkout process and real-time product status updates enhance user experience. This full-stack solution is designed for scalability and efficient e-commerce management, demonstrating comprehensive functionality in a user-friendly interface.',
    techStack: ['HTML5', 'CSS3', 'ReactJS', 'JavaScript', 'NodeJs', 'Java', 'SpringBoot', 'JPAHibernate', 'Postgresql'],
    githubLink: 'https://github.com/dinesh06003/Spring-ecom-project'
  },
];


const Projects = () => {
  return (
    <div className="projects" id='projects'>
      <h1>Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <Project key={project.id}
            title={project.title}
            techStack={project.techStack}
            description={project.description}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;