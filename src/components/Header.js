import React from 'react'
import { Link } from 'react-router-dom'
import image4 from '../assets/image-4.jpg'

const Header = () => {
  return (
    <header className='header'>
      <div>
        <a href='/'><img src={image4} alt='govtlogo'></img></a>
      </div>
      <nav className='navbar'>
        <ul>
        <Link className='links' to='/'>
          Home
        </Link>
        <a className='links' href="http://sirermar-blog.pxe0633.uta.cloud" target="_blank">Blog</a>
        <Link className='links' to='/services'>
            Services
          </Link>
        <Link className='links' to='/contactus'>
            Contact Us
          </Link>
          <Link className='links' to='/login'>
            Login
          </Link>
          <Link className='links' to='/signup'>
            Sign Up
          </Link>
          <Link className='links' to='/' aria-disabled>
            Sign Out
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
