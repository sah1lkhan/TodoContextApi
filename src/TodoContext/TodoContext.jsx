/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const TodoContext = createContext({
  todos: [{ id: 1, todo: "todo msg", completed: false }],
  addTodo: (todo) => {},
  updateTodo: (todo, id) => {},
  toggleTodo: (id) => {},
  deleteTodo: (id) => {},
});

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => setTodos((prev) => [{ ...todo }, ...prev]);
  const updateTodo = (id, todo) =>
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  const toggleTodo = (id) =>
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  const deleteTodo = (id) =>
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{ addTodo, updateTodo, toggleTodo, deleteTodo, todos, setTodos }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
