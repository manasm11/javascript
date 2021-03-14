import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className='nav-links'>
        <Link style={linkStyle} to='/about'><li>About</li></Link>
        <Link style={linkStyle} to='/shop'><li>Shop</li></Link>
      </ul>
    </nav>
  )
}

export default Nav


const linkStyle = {
  color: 'white'
}