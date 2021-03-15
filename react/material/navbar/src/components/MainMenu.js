import { Menu, MenuItem, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import {useState, useRef} from 'react'

export default function MainMenu() {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const menuRef = useRef(null);
  return (
    <>
    <MenuIconButton/>
    <Menu anchorEl={menuAnchor} open={!!menuAnchor} style={{marginTop:30}}>
      <MenuItem onClick={closeMenu}>
        <Link style={{textDecoration: 'none', color: 'blue'}} to='/'>Home</Link>
      </MenuItem>
      <MenuItem onClick={closeMenu}>
      <Link to='/contact'>Contact</Link>
      </MenuItem>
      <MenuItem onClick={closeMenu}>
      <Link to='/about'>About</Link>
      </MenuItem>
    </Menu>
    </>
  )

  function MenuIconButton(){
    return <IconButton
    edge='start'
    color='inherit'
    onClick={openMenu}
    aria-label='menu'
  >
    <MenuIcon ref={menuRef} />
  </IconButton>
  }
  function openMenu(e) {
    setMenuAnchor(e.currentTarget);
  }
  function closeMenu() {
    setMenuAnchor(null);
  }
  
}
