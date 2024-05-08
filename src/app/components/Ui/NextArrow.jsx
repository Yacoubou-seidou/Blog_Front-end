import React from 'react'
import "btn.css"
import { MdNavigateNext } from "react-icons/md"
const NextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <MdNavigateNext className='icon' />
      </button>
    </div>
  )
}

export default NextArrow