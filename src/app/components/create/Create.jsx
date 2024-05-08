import React from "react"
import "./create.css"
import { IoIosAddCircleOutline } from "react-icons/io"
import { useState } from "react"
import Image from "next/image"

export const Create = () => {
  const [file, setFile] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section className='newPost'>
        <div className='container boxItems'>
          <div className='img '>{file && <Image src={URL.createObjectURL(file)} alt='images' />}</div>
          <form onSubmit={handleSubmit}>
            <div className='inputfile flexCenter'>
              <label htmlFor='inputfile'>
                <IoIosAddCircleOutline />
              </label>
              <input type='file' id='inputfile' style={{ display: "none" }}  />
            </div>
            <input type='text' placeholder='Title'  />
            <textarea name='' id='' cols='30' rows='10' ></textarea>
            <button className='button'>Create Post</button>
          </form>
        </div>
      </section>
    </>
  )
}
