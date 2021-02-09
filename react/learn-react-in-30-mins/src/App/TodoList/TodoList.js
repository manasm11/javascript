import React from 'react'
import Todo from './Todo'
// import * as assert from 'utils/assertions'
import assert from '_assertions'

function TodoList({ todos }) {
    assert.checkArr(todos)
    return (
        todos.map(todo => <Todo todo={todo} key={todo.id}/>)
    )
}

export default TodoList
