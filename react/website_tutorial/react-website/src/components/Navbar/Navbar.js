import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button'

function Navbar() {
  const [click, setClick] = React.useState(false);
  const [button, setButton] = React.useState(true);
  window.addEventListener('resize', ()=>showButton(setButton))
  return (
    <nav className='Navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
          BITS-WIKI <i class='fas fa-chess-rook'></i>
        </Link>
        <div className='menu-icon' onClick={() => toggleClick(setClick)}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <ModuleNavs setClick={setClick} />
        </ul>
        {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
      </div>
    </nav>
  );
}

export default Navbar;

function toggleClick(setClick) {
  _checkSetClick(setClick);
  setClick((prevClick) => !prevClick);
}

function closeMobileMenu(setClick) {
  _checkSetClick(setClick);
  setClick(false);
}

function _checkSetClick(setClick) {
  if (typeof setClick != 'function')
    throw TypeError('Pass setClick function in toggleClick');
}

function ModuleNavs({ setClick }) {
  return (
    <>
      <li className='nav-item'>
        <Link
          to='/'
          className='nav-links'
          onClick={() => closeMobileMenu(setClick)}
        >
          Home
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='/services'
          className='nav-links'
          onClick={() => closeMobileMenu(setClick)}
        >
          Services
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='/sign-up'
          className='nav-links-mobile'
          onClick={() => closeMobileMenu(setClick)}
        >
          Sign Up
        </Link>
      </li>
    </>
  );
}


function showButton(setButton){
  if (window.innerWidth <= 960){
    setButton(false)
  }
  else{
    setButton(true)
  }
}
