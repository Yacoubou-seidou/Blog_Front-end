import React from "react"
import Image from "next/image"
import { IoIosAddCircleOutline } from "react-icons/io"

export const Account = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()
  }
  return (
    <>
      <section className='accountInfo'>
        <div className='container boxItems'>
          <h1>Account Information</h1>
          <div className='content'>
            <div className='left'>
              <div className='img flexCenter'>
                <Image src='' alt='' />
                <label htmlFor='inputfile'>
                  <IoIosAddCircleOutline className='icon' />
                </label>
                <input type='file' id='inputfile' style={{ display: "none" }}  />
              </div>
            </div>
            <form className='right' onSubmit={handleSubmit}>
              <label htmlFor=''>Username</label>
              <input type='text' placeholder=''  />
              <label htmlFor=''>Email</label>
              <input type='email' placeholder='' />
              <label htmlFor=''>Password</label>
              <input type='password'  />
              <button className='button' type='submit'>
                Update
              </button>
              {succ && <span>Profile is Updated</span>}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
