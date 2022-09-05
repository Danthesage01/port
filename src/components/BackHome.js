import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai"
import { useGlobalContext } from '../context/context'
const BackHome = () => {
  const { darkMode } = useGlobalContext()
  return (
    <section className='home-center'>
      <div className="home-header">
      <div className='home-icon'>
       
        <Link to="/">
            {
              darkMode === "light-mode" ? <AiFillHome color='#222' /> : <AiFillHome color='#fff'/>
        }
        </Link>
      </div>
      </div>
    </section>
  )
}

export default BackHome