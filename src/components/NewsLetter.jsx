import React from 'react'

const NewsLetter = () => {
  return (
    <div className='font-nunito bg-red_blue py-20 px-4'>
      <h1 className='font-bold lg:text-3xl text-xl text-center text-white mb-5'>Stay Updated on the Latest Messaging Strategies</h1>
      <form className='flex justify-center items-center gap-5 lg:flex-row md:flex-row flex-col'>
        <input type="email" placeholder='Your Email' required className='rounded-md border-none bg-white px-3 h-10 w-80 outline-none' />
        <button className='text-white text-lg font-semibold px-4 py-2 bg-btn rounded-md'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsLetter