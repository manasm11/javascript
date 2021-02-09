import TodoList from './TodoList'
import React, { useState, useRef } from 'react'
import { handleAddTodo, handleClearComplete } from "./handlers";
// import uuidv4 from 'uuid/v4'

function App() {
  const [todos, setTodos] = useState([])
  const nameInputRef = useRef()

  return (
    <>
      <input type="text" ref={nameInputRef}/>
      <button onClick={() => handleAddTodo(setTodos, nameInputRef)}>Add Todo</button>
      <button onClick={() => handleClearComplete(setTodos)}>Clear Complete</button>
      <TodoList todos={todos} />
      <div>0 left to do</div>
    </>
  );
}

export default App;
