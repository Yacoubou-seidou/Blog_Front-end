import React from 'react'
import './login.css'
import logo from '../../../assets/images/logo-no-background.png'
import Image from 'next/image';
const Login = () => {
  return (
    <div className="w-full contain">

<div className="user_card flex w-2/6 flex-col justify-center  px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm py-4">
      <Image
        src={logo}
        className="mx-auto h-10 w-auto"
        alt="Logo"
      />
    <h2 className="mt-10 text-center text-2xl leading-9 tracking-tight text-light-900">
      Sign in to your account
    </h2>
  </div>
  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="max-w-md mx-auto h-100 py-12 mb-3 w-80">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required={true}
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required={true}
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
          <div className="flex items-start mb-5">
          <p
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-center w-80"
          >
            Don&apos;t have an  account ?{" "}
            <a href="/register" className="text-blue-600 hover:underline dark:text-blue-500">
              Register
            </a>
          </p>
        </div>
  </div>
</div>

    </div>
  )
}

export default Login

