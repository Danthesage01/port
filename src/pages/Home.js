import React from 'react'
import { Link } from 'react-router-dom'
import Socials from '../components/Socials'
import headShot from "../assets/heads.jpg"
const Home = () => {
  return (
    <section className='hero'>
      <div className="section-center hero-center">
        <article className='hero-info'>
          <div className="title-underline home-bounce"></div>
          <h1>Daniel Ayeni</h1>
          <h4>A Frontend Developer</h4>
          <Socials />
          <div className='hero-footer'>
            <Link to="/projects" className='btn hero-btn'>Projects</Link>
            <Link to="/about" className='btn hero-btn'>Meet me</Link>
          </div>
        </article>
        <article className="hero-img">
          <img src={headShot} alt="headshot" className="hero-photo" />
        </article>
      </div>
    </section>
  )
}

export default Home