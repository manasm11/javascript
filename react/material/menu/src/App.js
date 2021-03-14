import './App.css';
import { Menu, MenuItem, Button } from '@material-ui/core';
import { useState, useEffect } from 'react';

function App() {
  const [menuAnchor, setMenuAnchor] = useState(null);

  const menuItemProps = {onClick:() => setMenuAnchor(null)}

  return (
    <div className='App'
      onDoubleClick={()=>setMenuAnchor(null)}
    >
      <Button onClick={(e) => setMenuAnchor(e.target)}>
        MENUUUUUUUu
      </Button>
      <Menu anchorEl={menuAnchor} open={!!menuAnchor}>
        <MenuItem {...menuItemProps}>Subscribe</MenuItem>
        <MenuItem {...menuItemProps}>Like</MenuItem>
        <MenuItem {...menuItemProps}>Share</MenuItem>
      </Menu>
    </div>
  );
}

export default App;
