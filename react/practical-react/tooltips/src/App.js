import './App.css';
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css';
import React from 'react'

const ColoredTooltip = ()=><span style={{color: 'yellow'}} >COLRED REACT COMPONENT</span>

function App() {
  return (
    <div className="App">
      <div style={{padding:'20px'}}>
        <Tippy content='Basic Tooltip'>
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{padding:'20px'}}>
        <Tippy content={<span style={{color:'orange'}}>COLORED</span>}>
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{padding:'20px'}}>
        <Tippy content={<ColoredTooltip/>}>
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{padding:'20px'}}>
        <Tippy content={<ColoredTooltip/>}>
          <CustomComponent/>
        </Tippy>
      </div>
      <div style={{padding:'20px'}}>
        <h3>ARROW</h3>
        <Tippy content='Basic Tooltip' arrow={false}>
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{padding:'20px'}}>
        <h3>DELAY</h3>
        <Tippy content='Basic Tooltip' delay={1000}>
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{padding:'20px'}}>
        <h3>PLACEMENT</h3>
        <Tippy content='Basic Tooltip' placement='right-start'>
          <button>Hover</button>
        </Tippy>
      </div>
    </div>
  );
}

const CustomComponent = React.forwardRef((props, ref)=>{
  return (
    <div {...{ref}}>
      <div>FISRT LINE</div>
      <div>SECOND LINE</div>
    </div>

  )
})

export default App;
