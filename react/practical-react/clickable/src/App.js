import logo from './logo.svg';
import './App.css';
import $ from 'jquery'
import React from 'react'

function App() {
  const ref = React.useRef(null)
  React.useEffect(()=>{
    $(ref.current).on('mouseenter', ()=>{

    })
  })
  return (
    <div className="App">
      <h1 className='clickable' ref={ref}>HELLO</h1>
      <button>Toggle Fade</button>
    </div>
  );
}

export default App;
