import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import mySvg from './svg'

const Login = () => {
  return (
        <>
        <section className='login'>
        <div className='container'>
          <div className='backImg'>
  {/* <Image src={BackgroundImage} className='svgBack' alt='background-image' /> */}
  <mySvg/>
            <div className='text'>
              <h3>Login</h3>
              <h1>My account</h1>
            </div>
          </div>

          <form >
            <span>Username or email address *</span>
            <input type='text' required  />
            <span>Password *</span>
            <input type='password' required  />
            <button className='button' type='submit'>
              Log in
            </button>

            <Link href='/register' className='link'>
              Register
            </Link>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login