import React from 'react'
import { useGlobalContext } from '../context/context'
const Buttons = () => {
  const {categories, stateCategory, handleClick } = useGlobalContext()
  return (
    <div className='btn-container'>
      {
      categories.map((category, index)=>{
        return <button 
        type='button' 
        name='cate'
        value={stateCategory}
          className={category === stateCategory ? `btn project-btn active` : "btn project-btn"} key={index} 
        onClick={(e)=>handleClick(e, category)
        }
        >{category}</button>
      })}
    </div>
  )
}

export default Buttons