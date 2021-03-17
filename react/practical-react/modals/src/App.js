import "./App.css";
import Modal from "react-modal";
import React from "react";

Modal.setAppElement('#root')

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <div className="App">
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            backgroundColor: 'gray'
          },
          content: {
            color: 'orange'
          }
        }}
      >
        <button onClick={() => setIsModalOpen(false)}>CLOSE</button>
        <h1>HELLO</h1>
        <p>HEALLO</p>
      </Modal>
    </div>
  );
}

export default App;
