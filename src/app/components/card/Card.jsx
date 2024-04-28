import React from "react"
import "./card.css"
import Image from "next/image"
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
import { Link } from "react-router-dom"

export const Card = ({ item, comments }) => {
  return (item && comments &&
    <>
      <section className='blog'>
        <div className='container grid3'>
            <div className='box boxItems' key={item.id}>
              <div className='img'>{item.photo && <Image src={item.photo} alt='article image' />}</div>
              <div className='details'>
                <div className='tag'>
                  <AiOutlineTags className='icon' />
                  {item.categories.map((c) => (
                    <a href='/' key={c.name}>#{c.name}</a>
                  ))}
                </div>
                <Link to={`/post/${item._id}`}>
                  <h3>{item.title}</h3>
                </Link>
                <p>{item.desc.slice(0, 180)}...</p>
                <div className='date'>
                  <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{new Date(item.createdAt).toDateString()}</label>
                  <AiOutlineComment className='icon' /> <label htmlFor=''>{comments.length}</label>
                  <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label>
                </div>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}
