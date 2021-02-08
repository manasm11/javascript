import React from 'react'
import Todo from './Todo'
import * as assert from '../../utils/assertions'
import {v4} from 'uuid';

function TodoList({ todos }) {
    assert.checkArr(todos)
    return (
        todos.map(todo => <Todo todo={todo} key={v4()}/>)
    )
}

export default TodoList
