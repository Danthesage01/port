import React from "react";
import {
  FaFilePdf,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
const Socials = () => {
  return (
    <>
      <ul className="social-icons hero-icons">
        <li className="tooltip">
          <a
            href="https://docs.google.com/document/d/10NgtR7INA5yBhhfL0spVRxYbBnU2dI-W55O73SQFWHM/edit?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
            className="social-icon "
          >
            <FaFilePdf />
          </a>
          <span className="tooltiptext">Resumé</span>
        </li>
        <li className="tooltip">
          <a
            href="https://github.com/Danthesage01"
            rel="noopener noreferrer"
            target="_blank"
            className="social-icon"
          >
            <FaGithub />
          </a>
          <span className="tooltiptext">Github</span>
        </li>
        <li className="tooltip">
          <a
            href="https://twitter.com/TheSageConcepts"
            rel="noopener noreferrer"
            target="_blank"
            className="social-icon"
          >
            <FaTwitter />
          </a>
          <span className="tooltiptext">Twitter</span>
        </li>
        <li className="tooltip">
          <a
            href="https://www.linkedin.com/in/danthesage/"
            rel="noopener noreferrer"
            target="_blank"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          <span className="tooltiptext">LinkedIn</span>
        </li>
        <li className="tooltip">
          <a
            href="mailto:ayenibabajidedaniel@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            className="social-icon"
          >
            <FaEnvelope />
          </a>
          <span className="tooltiptext">Mail</span>
        </li>
      </ul>
    </>
  );
};

export default Socials;
