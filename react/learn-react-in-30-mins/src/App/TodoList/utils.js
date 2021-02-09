export function toggleTodo(id, setTodos){
    setTodos(prevTodos => {
        newTodos = [...prevTodos]
        todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodos)
    })
}