import React from 'react'
import { FaFilePdf, FaTwitter, FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa"
const Socials = () => {
  return (
    <>
      <ul className="social-icons hero-icons">
        <li>
          <a href="https://drive.google.com/file/d/1oSU8BONSlzHtvkMRu87L_bt6Rpjnq4lv/view?usp=sharing" rel='noopener noreferrer' target="_blank" className='social-icon'>
            <FaFilePdf />
          </a>
        </li>
        <li>
          <a href="https://github.com/Danthesage01" rel='noopener noreferrer' target="_blank" className='social-icon'>
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/TheSageConcepts" rel='noopener noreferrer' target="_blank" className='social-icon'>
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/danthesage/" rel='noopener noreferrer' target="_blank" className='social-icon'>
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="mailto:ayenibabajidedaniel@gmail.com" rel='noopener noreferrer' target="_blank" className='social-icon'>
            <FaEnvelope />
          </a>
        </li>
      </ul>
    </>
  )
}

export default Socials