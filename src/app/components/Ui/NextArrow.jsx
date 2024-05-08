import React from 'react'
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