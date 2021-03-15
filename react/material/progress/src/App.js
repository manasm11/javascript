import './App.css';
import BestExample from './BestExample'
import r from 'react'

function App() {

  const [loading, setLoading] = r.useState(true)

  setInterval(()=>setLoading(false), 4000)

  return (
    <div className="App">
      <BestExample {...{loading}}/>
    </div>
  );
}

export default App;
