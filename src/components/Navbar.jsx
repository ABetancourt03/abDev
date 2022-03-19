import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import '../styles/Navbar.css'

const Navbar = () => {
  const [toggledMenu, setToggledMenu] = useState(false)

  const toggleMenu = () => {
    setToggledMenu(!toggledMenu)
  }

  return (
    <nav className='Navbar'>

      <NavLink className='Logo' to='/'>
        <img src='logo.png' alt='Logo' />
      </NavLink>

      <div
        className={`nav-links
        ${toggledMenu === true && 'active'}
        ${toggledMenu === false && ''}`}
      >
        <NavLink className='nav-link' to='/#about-me'>
          About Me
        </NavLink>
        <NavLink className='nav-link' to='/projects'>
          Projects
        </NavLink>
        <NavLink className='nav-link' to='/#contact'>
          Contact
        </NavLink>
      </div>

      <button onClick={toggleMenu} className='menu-btn'>
        <i className='fa-solid fa-bars' />
      </button>
    </nav>
  )
}

export default Navbar
