import React, { useEffect, useState } from "react";
import "./todo.css";
import TaskDisplay from "./TaskDisplay";

const Todo = () => {
  const [toDo, setTodo] = useState([]);
  const [task, setTask] = useState("");
  const [error, setError] = useState({});

  function inputChangeHandler(e) {
    const val = e.target.value;

    if (!val) return;

    setTask(val);
  }
  function addTodoData() {
    if (!task) {
      setError((prev) => ({
        ...prev,
        inputerr: "Add Smothing Before you click add",
      }));
    } else {
      setTodo((prev) => [...prev, { task: task, checked: false }]);
      setTask("");
    }
  }

  function isChecked(index) {
    const checkedArr = toDo.map((data, ind) =>
      index == ind ? { ...data, checked: !data.checked } : data,
    );
    setTodo(checkedArr);
  }
  function deleteTodo(index) {
    const deleteTaskData = toDo.filter((data, ind) => ind !== index && data);

    setTodo(deleteTaskData);
  }
  function editTodo(index, editVal) {
    const newTodo = toDo.map((data, ind) =>
      ind == index ? { task: editVal , isChecked:false } : data,
    );
    setTodo(newTodo);
  }

  return (
    <div className="todo-container">
      <h1 className="color heading">Your To Do</h1>
      <div className="todo-main">
        <form className="input-container" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="add-todo-input color"
            value={task}
            placeholder={error.inputerr ? error.inputerr : "Add New Task"}
            onChange={(e) => inputChangeHandler(e)}
          />
          <button className="add-btn" onClick={() => addTodoData()}>
            +
          </button>
        </form>
        <div className="mt-6">
          {!toDo.length ? (
            <div className="text-amber-50 text-center">Add New Task</div>
          ) : (
            <>
              {toDo?.map((data, index) => (
                <div key={index}>
                  <TaskDisplay
                    todo={data}
                    index={index}
                    checked={isChecked}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                  />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
