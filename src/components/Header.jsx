import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <header className='nav bg-dark p-3'>

            <Link to='/' className='nav-link text-light'><img src="queens logo.jpg" className='rounded-circle' style={{width: '40px'}} alt="" /></Link>
            <Link className='nav-link text-light'>Home</Link>
            <Link className='nav-link text-light'>Categories</Link>
            <Link to='/admin' className='nav-link text-light'>Admin</Link>
            <Link to='/admin/addpost' className='nav-link text-light'>Add Post</Link>
            <Link to='signup' className='nav-link text-light'>Get Started</Link>
            <Link to='login' className='nav-link text-light'>Login</Link>
            <Link className='nav-link text-light'>Logout</Link>
        </header>
    </div>
  )
}

export default Header