import React from 'react'
import { GrFormPrevious } from "react-icons/gr"
const PrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <GrFormPrevious className='icon' />
      </button>
    </div>
  )
}

export default PrevArrow