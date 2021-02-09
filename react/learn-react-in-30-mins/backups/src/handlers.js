import {v4} from 'uuid'
import assert from './assertions'

export function handleAddTodo(setTodos, nameInputRef){
    assert.checkFunc(setTodos)
    assert.checkObj(nameInputRef)
    setTodos(prevTodos => {
        assert.checkArr(prevTodos)
        const newTodo = {
            name: nameInputRef.current.value,
            checked: false,
            id: v4()
        }
        return [...prevTodos, newTodo]
    })
    nameInputRef.current.value = ''
}
