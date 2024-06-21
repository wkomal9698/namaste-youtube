import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  // Early return pattern
  if(!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-lg w-48'>
      <ul>
        <li className='pt-3'><Link to={'/'}>Home</Link></li>
        <li className='pt-3'><Link to={'/demo'}>Demo</Link></li>
        <li className='pt-3'>Shorts</li>
        <li className='pt-3'>Live</li>
        <li className='pt-3'>Videos</li>
      </ul>
      <h1 className='font-bold pt-6'>Subscriptions</h1>
      <ul>
        <li className='pt-3'>Music</li>
        <li className='pt-3'>Sports</li>
        <li className='pt-3'>Gaming</li>
        <li className='pt-3'>Movies</li>
      </ul>
      <h1 className='font-bold pt-6'>Watch Later</h1>
      <ul>
        <li className='pt-3'>Music</li>
        <li className='pt-3'>Sports</li>
        <li className='pt-3'>Gaming</li>
        <li className='pt-3'>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar