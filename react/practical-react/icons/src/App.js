import logo from "./logo.svg";
import "./App.css";
import { FaReact } from "react-icons/fa";
import { MdAlarm } from "react-icons/md";
import { IconContext } from "react-icons";

function App() {
  return (
    <IconContext.Provider value={{ color: "blue", size: "5rem" }}>
      <div className="App">
        <FaReact />
        <MdAlarm color='purple' size='10rem' />
      </div>
    </IconContext.Provider>
  );
}

export default App;
