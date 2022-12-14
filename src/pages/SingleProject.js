import React from 'react'
import { useGlobalContext } from "../context/context"
import { Link, useParams } from "react-router-dom"
import Error from './Error'
import BackHome from '../components/BackHome'
import data from '../data'
const SingleProject = () => {
  const { readMore, setReadMore } = useGlobalContext()
  const { id } = useParams()
  const index = id - 1
  if (data[index] === undefined || data.length < 1) {
    return <Error />
  }
  const singleProject = data[index]
  const { image, description, url, github, title } = singleProject

  return (
    <>
      <BackHome />
      <section className='section-center single-project'>
        <div className="section-title">
          <h2>{title}</h2>
        </div>
        <article className='single-card'>
          <div className='single-card-img-container'>
            <img src={image} alt={title} className="single-card-photo" />
          </div>
          <div className="single-card-info">
            <p>{`${readMore === false ? description : description.substring(0, 120)}`} <button className='read-btn' onClick={() => setReadMore(!readMore)}>{readMore === false ? "See less" : "...Read more"}</button></p>
          </div>
          <div className="single-card-footer">
            <a href={url} rel="noopener noreferrer" target="_blank" className='single-card-btn '>Demo</a>
            <Link to="/projects" className='single-card-btn '>All Projects</Link>
            <a href={github} rel="noopener noreferrer" target="_blank" className='single-card-btn '>Github</a>
          </div>
        </article>
      </section>
    </>
  )
}

export default SingleProject