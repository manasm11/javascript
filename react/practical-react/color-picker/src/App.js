import logo from './logo.svg';
import './App.css';
import { ChromePicker } from 'react-color'
import React from 'react'

function App() {
  const [color, setColor] = React.useState('#fff')
  const [isPickerVisible, setIsPickerVisible] = React.useState(false)
  return (
    <div>
      <button onClick={() => setIsPickerVisible(p => !p)}>{isPickerVisible ? 'Close' : 'Show Color Picker'}</button>
      {isPickerVisible && <ChromePicker color={color} onChange={c => setColor(c.hex)} />}
      <h1>You picked {color}</h1>
    </div>
  );
}

export default App;
