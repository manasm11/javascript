import TodoList from './TodoList';
import React, { useState, useRef, useEffect } from 'react';
// import { handleAddTodo, handleClearComplete } from "./handlers";
// import uuidv4 from 'uuid/v4'
import * as h from './handlers'
import * as u from './utils'

function App() {
  const STORAGE_KEY = 'todoApp.todos'
  const [todos, setTodos] = useState([
    {id:1, name:'Manas', complete:true},
    {id:1, name:'Mishra', complete:false}
  ])
  const nameInputRef = useRef()

  useEffect(()=>{
    u.getFromLocalStorage(STORAGE_KEY)
  }, [])

  useEffect(()=>{
    u.saveToLocalStorage(todos, STORAGE_KEY)
  }, [todos])

  return (
    <>
      <input type="text" ref={nameInputRef}/>
      <button onClick={() => h.handleAddTodo(setTodos, nameInputRef)}>Add Todo</button>
      {/* <button onClick={() => handleClearComplete(setTodos)}>Clear Complete</button> */}
      <TodoList todos={todos} />
      <div>0 left to do</div>
    </>
  );
}

export default App;
