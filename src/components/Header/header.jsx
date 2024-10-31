import React, { useState } from "react";
import "./header.css";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for the menu

const Header = () => {


    const [activeNav, setActiveNav] = useState("#home");
    const [isNavVisible, setNavVisibility] = useState(false);

    return (
        <header className="header">
            <nav className="nav">
                <div className="nav__collapse">
                    <a href="#home" className="nav__logo"> Portfolio</a>
                    <span className="nav__toggle" onClick={() => setNavVisibility(!isNavVisible)}>
                        {isNavVisible ? <FaTimes /> : <FaBars />}
                    </span>
                </div>

                <div className={isNavVisible ? 'nav__menu menuactive' : 'nav__menu'}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => { setActiveNav("#home"); setNavVisibility(!isNavVisible); }} className={activeNav == "#home" ? "nav__link active-link" : "nav__link"}>Home</a>
                        </li>
                        <li className="nav__item" >
                            <a href="#about" onClick={() => { setActiveNav("#about"); setNavVisibility(!isNavVisible); }} className={activeNav == "#about" ? "nav__link active-link" : "nav__link"}>About</a>
                        </li>
                        <li className="nav__item" >
                            <a href="#experiences" onClick={() => { setActiveNav("#experience"); setNavVisibility(!isNavVisible); }} className={activeNav == "#experience" ? "nav__link active-link" : "nav__link"}>Experience</a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" onClick={() => { setActiveNav("#skills"); setNavVisibility(!isNavVisible); }} class={activeNav == "#skills" ? "nav__link active-link" : "nav__link"}>Skills</a>
                        </li>

                        <li className="nav__item">
                            <a href="#projects" onClick={() => { setActiveNav("#projects"); setNavVisibility(!isNavVisible); }} className={activeNav == "#projects" ? "nav__link active-link" : "nav__link"}>Projects</a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" onClick={() => { setActiveNav("#contact"); setNavVisibility(!isNavVisible); }} class={activeNav == "#contact" ? "nav__link active-link" : "nav__link"}>Contact</a>
                        </li>

                    </ul>
                </div>
            </nav>

        </header>

    )
}

export default Header;