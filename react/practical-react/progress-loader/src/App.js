import logo from "./logo.svg";
import "./App.css";
import NProgress from 'nprogress'

function App() {
  return (
    <div className="App">
      <button onClick={() => NProgress.start()}>Start</button>
      <button onClick={() => NProgress.done()}>Stop</button>
    </div>
  );
}

export default App;
