import React from 'react';
import './scrollToTop.css';
import { FaArrowCircleUp } from "react-icons/fa";


const ScrollUp = () => {
  window.addEventListener('scroll', function () {
    const scrollUp = document.querySelector('.scrollup');
    // when the scroll is higher than 560 viewport height, add the show-scroll class to a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
  });
  return (
    <a href='#home' className='scrollup'>
        <FaArrowCircleUp className='scrollup__icon'/>
    </a>
  );
};

export default ScrollUp;
