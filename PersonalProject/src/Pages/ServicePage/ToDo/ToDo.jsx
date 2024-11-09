import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import { useToDoContext } from "../../../ContextApi/ToDoContext";
import './ToDo.css'; // Import the CSS file

export default function ToDo() {
  const { todos, setTodos } = useToDoContext();
  const [todoItem, setTodoItem] = useState("");
  
  const handleInput = (e) => {
    setTodoItem(e.target.value);
  };

  const AddToDo = () => {
    if (todoItem.trim()) {
      const newTodo = {
        id: todos.length + 1,
        message: todoItem,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTodoItem("");
    }
  };

  const DeleteTodo = (id) => {
    const newTodos = todos.filter((el) => el.id !== id);
    setTodos(newTodos);
  };

  const UpdateToDo = (id) => {
    const updatedTodo = prompt("Edit Your Todo List");
    if (updatedTodo) {
      const newUpdatedTodo = todos.map((el) =>
        el.id === id ? { ...el, message: updatedTodo } : el
      );
      setTodos(newUpdatedTodo);
    }
  };

  return (
    <>
    
      <Navbar />
    <div className="todo-container">
      <h1 className="todo-title">ToDo List</h1>
      <div className="input-container">
        <input
          className="todo-input"
          type="text"
          placeholder="Add Todo"
          value={todoItem}
          onChange={handleInput}
        />
        <button className="add-button" onClick={AddToDo}>
          Add Todo
        </button>
      </div>
      <div className="todo-list">
        {todos?.length > 0 ? (
          todos.map((v) => (
            <div className="todo-item" key={v.id}>
              <span className="todo-message">{v.id}</span>
              <span className="todo-message">{v.message}</span>
              <div className="button-group">
                <button
                  className="edit-button"
                  onClick={() => UpdateToDo(v.id)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => DeleteTodo(v.id)}
                >
                  &times; Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="empty-message">Please Add Todo</p>
        )}
      </div>
    </div>
    </>
  );
}
