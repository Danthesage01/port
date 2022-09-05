import React from 'react'
import Socials from './Socials'

const Footer = () => {
  return (
    <section className='footer'>
      <Socials />
      <p>&copy;<span>{new Date().getFullYear()} </span> 
        Daniel Ayeni.</p>
    </section>
  )
}

export default Footer