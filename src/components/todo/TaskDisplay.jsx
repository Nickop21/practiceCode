import React from "react";

const TaskDisplay = () => {
  return (
    <div className="color task-display-container">
      <div className="flex  gap-4 items-center">
        <input type="checkbox" className="input-check" />
        <p className="task-content color">
          Loditate pariatur, consequuntur libero suscipit?
        </p>
      </div>
      <button className="delete-btn">x</button>
    </div>
  );
};

export default TaskDisplay;
