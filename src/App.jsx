import React from 'react';
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Header from './components/Header/header';
import Experience from './components/experience/experience';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import './App.css';
import Certification from './components/certifications/certifications';
import ScrollUp from './components/toTop/scrollToTop';
import Connect from './components/connect/connect';

function App() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

  return (
    <>

      <Header />
      <main className='main'>
      <Home />
      <About />
      <Experience />
      <Skills />
      <Certification/>
      <Projects />
      <Connect/>
      <Contact />

      <ScrollUp/>
      </main>

    </>

  );
}

export default App;
