import * as assert from '../utils/assertions'

export function handleAddTodo(setTodos, nameInputRef){
    assert.checkFunc(setTodos)
    assert.checkObj(nameInputRef)
    setTodos(prevTodos => {
        assert.checkArr(prevTodos)
        const newTodo = {
            name: nameInputRef.current.value,
            checked: false
        }
        return [...prevTodos, newTodo]
    })
}