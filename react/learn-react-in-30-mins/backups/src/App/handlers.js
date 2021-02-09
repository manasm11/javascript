import {v4} from 'uuid'

export function handleAddTodo(setTodos, nameInputRef){
    setTodos(prevTodos => {
        const newTodo = {
            name: nameInputRef.current.value,
            checked: false,
            id: v4()
        }
        return [...prevTodos, newTodo]
    })
    nameInputRef.current.value = ''
}
