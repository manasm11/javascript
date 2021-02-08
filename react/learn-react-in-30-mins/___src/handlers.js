export function handleAddTodo(nameInputRef, setTodos) {
    const name = nameInputRef.current.value
    if (name === '') return
    const newTodo = {
        id: 1,
        name: name,
        complete: false
    }
    setTodos(prevTodos => [...prevTodos, newTodo])
    nameInputRef.current.value = ''
}

export function handleClearComplete(setTodos) {
    
}