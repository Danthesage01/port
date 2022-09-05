import React from 'react'
import BackHome from '../components/BackHome'
import Footer from '../components/Footer'
import { useGlobalContext } from '../context/context'
import Project from "../components/Project"
import Buttons from '../components/Buttons'
const Projects = () => {
  const { projects } = useGlobalContext()
  return (
    <section className='about' id='projects'>
      <BackHome />
      <div className='hero'>
        <div className="section-center">
          <div className="section-title ">
            <h2>Projects</h2>
          </div>
          <Buttons />
          <div className="projects-container">
            {projects.map(project => {
              return <Project key={project.id} {...project} />
            })}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Projects