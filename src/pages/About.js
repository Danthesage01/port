import React from 'react'
import headShot from "../assets/about.jpg"
import Form from '../components/Form'
import Footer from '../components/Footer'
import BackHome from '../components/BackHome'
const About = () => {
  return (

    <section className=' about ' id='about'>
      <BackHome />
      <div className='hero'>
        <div className="section-center">
          <div className="section-title">
            <h2>meet me</h2>
          </div>
          <div className="about-center">
            <article className="about-img">
              <img src={headShot} alt="Daniel" className="about-photo" />
            </article>
            <article className="about-info">
              <p>I am a frontend software developer skilled and experienced in using modern technologies, including HTML, CSS, JavaScript
                and ReactJS, to develop responsive, user-friendly websites and web apps that create value and solve real-life problems.
              </p>
              <p>
                Before transitioning into Software Development, I was a writer who crafted high-quality and engaging technical content
                for varying industries, including but not limited to Blockchain, Cryptocurrency, iGaming and eCommerce. I also run a blog where I share my thoughts. <a href="https://danthesage.com/" className='blog-btn' rel='noopener noreferrer' target="_blank">Visit here.</a> 
              </p>
              <p>
                Outside coding, I enjoy watching football, writing, travelling and surfing the internet.
              </p>
            </article>
            <Form />
          </div>
        </div>
      </div>
        <Footer />
    </section>

  )
}

export default About