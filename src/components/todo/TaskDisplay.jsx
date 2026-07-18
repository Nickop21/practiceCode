import React, { useEffect, useRef, useState } from "react";

const TaskDisplay = ({ todo, index, checked, deleteTodo, editTodo }) => {
  const [editVal, setEditVal] = useState(todo.task);
  const [editTodoInput, setEditTodoInput] = useState(false);
  const inputref = useRef(null);

  function editChangeHandler(e) {
    const val = e.target.value;

    setEditVal(val);
  }
  function editChangestate() {
    if (!editVal) return;

    setEditTodoInput(false);
    editTodo(index, editVal);
  }

  useEffect(() => {
   inputref.current?.focus()
  }, [editTodoInput])
  

  return (
    <div
      className={`"color task-display-container mt-4 ${todo.checked && "bg-green-500"}`}
    >
      <div className="flex gap-4  items-center">
        {!editTodoInput && (
          <input
            type="checkbox"
            className="input-check custom-checkbox"
            onChange={() => checked(index)}
          />
        )}
        {editTodoInput ? (
          <input
            type="text"
            ref={inputref}
            value={editVal}
            className="text-white border-b-2 outline-none px-2  border-white"
            onChange={(e) => editChangeHandler(e)}
            onKeyDown={(e) => {
              if (e.code == "Enter") {
                editChangestate();
              }
            }}
          />
        ) : (
          <p className={`task-content color `}>{todo?.task}</p>
        )}
      </div>
      <div className="flex">
        {editTodoInput ? (
          <button
            className="p-1 ml-4 flex items-start cursor-pointer"
            onClick={() => editChangestate()}
          >
            ✔️
          </button>
        ) : (
          <button
            className="p-1 ml-4 flex items-start cursor-pointer"
            onClick={() => {
              setEditTodoInput(!editTodoInput);
            }}
          >
            ✏️
          </button>
        )}

        <button
          className="delete-btn color ml-4 flex items-start cursor-pointer"
          onClick={() => deleteTodo(index)}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default TaskDisplay;
