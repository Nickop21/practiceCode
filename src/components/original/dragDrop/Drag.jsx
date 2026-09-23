import React, { useState } from "react";
import { useRef } from "react";

const Drag = () => {
  const [comp, setComp] = useState({
    Todo: [
      "Design Ui",
      "set up projec repo",
      "write unit test",
      "integrate payment gateway",
    ],
    "In Progress": [
      "develop authentication flow",
      "implementation od responsive design",
    ],
    completed: ["set up of ci/cd pipeline", "code review", "deployment"],
  });
  const sourceRef = useRef();
  const sourceTextRef = useRef();

  function dragStartHandler(e, data, container) {
    e.target.style.opacity = 0.5;
    sourceTextRef.current = data;
    sourceRef.current = container;
  }
  function dragEndHandler(e) {
    e.target.style.opacity = 1;
  }
  function dropHandler(e, targetContainer) {
    if (targetContainer == sourceRef.current) return;
    setComp((prev) => {
      const newData = { ...prev };

      newData[sourceRef.current] = newData[sourceRef.current]?.filter(
        (data) => data !== sourceTextRef.current,
      );
      newData[targetContainer] = [
        ...newData[targetContainer],
        sourceTextRef.current,
      ]; // div in which we are droping

      return newData;
    });
  }

  return (
    <div className="text-white flex flex-col md:flex-row">
      {Object.keys(comp).map((container, id) => (
        <div
          className="flex flex-col p-4  bg-gray-900 rounded-2xl mx-6 text-center md:w-1/3 mb-6"
          onDrop={(e) => dropHandler(e, container)}
          onDragOver={(e) => e.preventDefault()}
        >
          <h1 className="text-2xl font-extrabold">{container}</h1>
          <div className=" flex flex-col ">
            {comp[container]?.map((task) => (
              <span
                className="bg-blue-950 p-4 my-2 rounded-2xl cursor-grab"
                draggable
                onDragStart={(e) => dragStartHandler(e, task, container)}
                onDragEnd={(e) => dragEndHandler(e)}
              >
                {task}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Drag;
