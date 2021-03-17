import logo from "./logo.svg";
import "./App.css";
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="App">
      <ReactPlayer
        width='480px'
        height='240px'
        controls
        url="https://www.youtube.com/watch?v=ww4j3rObb6Q"
        onEnded={() => console.log("On Ended")}
        onStart={() => console.log("On Start")}
        onReady={() => console.log("On Ready")}
        onPause={() => console.log("On Pause")}
        onError={() => console.log("On Error")}
      />
    </div>
  );
}

export default App;
