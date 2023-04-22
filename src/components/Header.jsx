import { FormEvent, useState } from 'react'
import logo from '../assets/logo.svg'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [isSearch, setIsSearch] = useState(false)


  const search = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className='w-full border-b border-gray-200 bg-white'>
        <div className='py-4 w-full font-Schibsted flex items-center justify-between lg:justify-evenly md:justify-evenly px-6 lg:px-2 md:px-2'>
          <Link to='/'>
            <img src={logo} alt="" className='lg:w-40 w-28' />
          </Link>
          <div className='hidden lg:flex md:flex items-center gap-4'>
            {isSearch ?
              <form onSubmit={(e) => { search(e) }}>
                <input type="text" placeholder='Search...' className='border border-gray-200 h-8 p-4 outline-none rounded-full text-base text-link mb-2' /></form> : <span className='hidden'></span>}
            <AiOutlineSearch onClick={() => setIsSearch(!isSearch)} fontSize={20} className='cursor-pointer hover:text-sky-400' />
            <Link to='all-blogs' className='cursor-pointer p-2 text-link hover:text-sky-400 font-normal text-sm'>All Article</Link>
            <span className='cursor-pointer p-2 text-link hover:text-sky-400 font-normal text-sm'>Technology</span>
            <span className='cursor-pointer p-2 text-link hover:text-sky-400 font-normal text-sm'>News</span>
            <span className='cursor-pointer p-2 text-link hover:text-sky-400 font-normal text-sm'>Business</span>
            <span className='cursor-pointer p-2 text-link hover:text-sky-400 font-normal text-sm'>Lifestyle</span>
          </div>
          <div className='block lg:hidden md:hidden cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
            <RxHamburgerMenu fontSize={20} className='text-link' />
          </div>
        </div>
      </div>
      {
        isOpen ?
          <div className='flex flex-col items-center py-4  rounded-lg shadow-xl' style={{ backdropFilter: "blur(10px)" }}>
            <form onSubmit={(e) => { search(e) }}>
              <input type="text" placeholder='Search...' className='border border-gray-200 h-8 p-4 outline-none rounded-full text-base text-link mb-2' />
            </form>
            <Link to='all-blogs' onClick={()=>setIsOpen(false)} className='cursor-pointer p-2 text-link hover:text-sky-400 font-normal text-base text-center w-full'>All Article</Link>
            <Link to='' onClick={()=>setIsOpen(false)} className='cursor-pointer p-2 text-link hover:text-sky-400 font-normal text-base text-center w-full'>Technology</Link>
            <Link to='' onClick={()=>setIsOpen(false)} className='cursor-pointer p-2 text-link hover:text-sky-400 font-normal text-base text-center w-full'>News</Link>
            <Link to='' onClick={()=>setIsOpen(false)} className='cursor-pointer p-2 text-link hover:text-sky-400 font-normal text-base text-center w-full'>Business</Link>
            <Link to='' onClick={()=>setIsOpen(false)} className='cursor-pointer p-2 text-link hover:text-sky-400 font-normal text-base text-center w-full'>Lifestyle</Link>
          </div> : <div className='hidden'></div>
      }
      <Outlet />
    </>
  )
}

export default Header