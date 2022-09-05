import React, { useEffect } from 'react'
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { useGlobalContext } from '../context/context'
const Navbar = () => {
  const {darkMode, toggleMode} = useGlobalContext()
  useEffect(()=>{
    document.documentElement.className = darkMode
  },[darkMode])

  return (
    <nav className='nav'>
      <div className='nav-center'>
        <header className='nav-header'>
          <div className='nav-img'>
          </div>
          <button className='nav-btn' onClick={toggleMode}>
            {
              darkMode ==="light-mode"?
             <MdDarkMode  color='#222'/>
            :<MdLightMode color='#fff' />
            }
          </button>
        </header>
      </div>
    </nav>
  )
}

export default Navbar