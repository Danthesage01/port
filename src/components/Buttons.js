import React from 'react'
import { useGlobalContext } from '../context/context'
const Buttons = () => {
  const {category } = useGlobalContext()
  return (
    <div className='btn-container'>
      {
      category.map((item, index)=>{
        return <button className='btn project-btn' key={index}>{item}</button>
      })}
    </div>
  )
}

export default Buttons