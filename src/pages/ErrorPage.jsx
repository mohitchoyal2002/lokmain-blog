import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='h-screen flex justify-center items-center font-nunito'>
      <div>
      <h1 className='text-5xl font-semibold text-link mb-2'>Page Note Found</h1>
      <Link to='/' className='text-lg font-medium text-link underline'> Go Home</Link>
      </div>
    </div>
  )
}

export default ErrorPage