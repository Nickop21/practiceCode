import React from "react";
import "./todo.css";
import TaskDisplay from "./TaskDisplay";

const Todo = () => {
  return (
    <div className="todo-container">
      <h1 className="color heading">Your To Do</h1>
      <div className="todo-main">
        <div className="input-container">

        <input type="text" className="add-todo-input color" placeholder="Add new task" />
        <button className="add-btn">+</button>

        </div>
        <div className="mt-6">

        </div>

        <TaskDisplay/>
      </div>
    </div>
  );
};

export default Todo;
