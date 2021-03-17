import logo from "./logo.svg";
import "./App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CustomComponent({ closeToast }) {
  return (
    <h1>
      CUSTOM COMPONENT <button onClick={closeToast}>CLOSE</button>
    </h1>
  );
}

toast.configure();

function App() {
  return (
    <div className="App">
      <button onClick={handleNotify}>Notify!</button>
    </div>
  );

  function handleNotify() {
    // toast('BASIC NOTIFICATION')
    toast("POSITIONED NOTIFICATION", { position: toast.POSITION.TOP_LEFT });
    toast.success("POSITIONED SUCCESS NOTIFICATION", {
      position: toast.POSITION.TOP_CENTER,
    });
    toast.info("POSITIONED INFO 8 seconds NOTIFICATION", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 8000,
    });
    toast.warning("POSITIONED WARNING Never Closes NOTIFICATION", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: false,
    });
    toast.error("POSITIONED ERROR NOTIFICATION", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    toast(<CustomComponent/>, { position: toast.POSITION.BOTTOM_RIGHT });
  }
}

export default App;
