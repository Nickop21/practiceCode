import React from "react";

const TaskDisplay = ({ todo, index, checked, deleteTodo }) => {
  return (
    <div
      className={`"color task-display-container mt-4 ${todo.checked && "bg-green-500"}`}
    >
      <div className="flex gap-4  items-center">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="input-check custom-checkbox"
            onChange={() => checked(index)}
          />
        </div>
        <p className={`task-content color `}>{todo?.task}</p>
      </div>
        <button className="delete-btn color ml-4 flex items-start" onClick={() => deleteTodo(index)}>
          x
        </button>
    </div>
  );
};

export default TaskDisplay;
