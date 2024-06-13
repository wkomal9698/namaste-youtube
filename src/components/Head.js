import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col shadow-lg p-2 m-2'>
        <div className='flex col-span-1'>
            <img onClick={() => toggleMenuHandler()} alt="menu" className='ml-2 mr-10 my-auto w-8 h-10 cursor-pointer' src='https://cdn2.iconfinder.com/data/icons/most-useful-icons-4/50/HAMBURGER_MENU-512.png'/>
            <a href='/'  className='my-auto h-6'><img alt="logo" className='ml-2 mr-10 my-auto w-26 h-5' src='https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png'/></a>
        </div>
        <div className='col-span-10 px-10'>
            <input className='border border-gray-400 rounded-l-full my-auto p-2 w-1/2' type='text'/>
            <button className=' my-auto rounded-r-full p-2 border border-gray-400 bg-gray-100 px-5'>🔍</button>
        </div>
        <div className='col-span-1'>
            <button className='ml-2 my-auto'>
              <img className='ml-2 w-8 h-8' alt='user' src='https://tse2.mm.bing.net/th?id=OIP.03WKV-zEZtyHfYqP6IU92QHaHx&pid=Api&P=0&h=180'/>
            </button>
        </div>
    </div>
  )
}

export default Head