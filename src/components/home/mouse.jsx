import React from 'react';
import './home.css';

const MouseIcon = () => {

  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="mouse-icon"
    >
      {/* Outer shell of the mouse */}
      <ellipse
        cx="50"
        cy="50"
        rx="30"
        ry="45"
        fill="none"
        stroke="black"
        strokeWidth="3"
      />
      {/* Animated cursor that simulates clicking */}
      <line
        className="mouse-cursor"
        x1="50"
        y1="12"
        x2="50"
        y2="35"
        stroke="black"
        strokeWidth="4"
      />
    </svg>
  );
}

export default MouseIcon;
