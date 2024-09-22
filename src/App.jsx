import { useEffect, useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";


export default function App() {

  // Important note about hooks for future: they cannot be put within conditionals/loops. Everytime you run the page, the same number of hooks MUST be used. Convention: Keep hooks at the top of your code.

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (!localValue) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {localStorage.setItem("ITEMS", JSON.stringify(todos))}, [todos])

  function addTodo(todoTitle) {
    let newTodoObj = { id: crypto.randomUUID(), title: todoTitle, completed: false}
    setTodos((currentTodos) => {return [...currentTodos, newTodoObj]});
  }

  function toggleTodo(todoID, checked) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        return todo.id === todoID ? { ...todo, completed: checked } : todo;
      });
    });
  }

  function deleteTodo(todoID) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => {
        return todo.id !== todoID;
      });
    });
  }

  return (
    <>
      <NewTodoForm addTodo={addTodo} />

      <h1 className="header">Todo List</h1>

      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}></TodoList>

    </>
  );
}
