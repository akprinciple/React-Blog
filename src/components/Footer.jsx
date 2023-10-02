import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className='p-3 text-center bg-dark text-light'>
            &copy; Leotech World Forum {new Date().getFullYear}
        </footer>
    </div>
  )
}

export default Footer