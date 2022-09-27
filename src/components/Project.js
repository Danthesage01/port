import React from 'react'
import { Link } from 'react-router-dom'
const Project = ({ id, technology, title }) => {
  return (
    <article className='card project'>
      <div>
      <h4>{title}</h4>
      <h5>technology:</h5>
      <p>({technology})</p>
      </div>
      <Link to={`/projects/${id}`} className="color">
        <button className='btn link-btn'>
          Check
        </button>
      </Link>
    </article>
  )
}

export default Project