import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <nav class="header-div">
          <ul class="header-content">
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/projects">projects</Link></li>
          </ul>
      </nav>
    </>
  )
}

export default Header