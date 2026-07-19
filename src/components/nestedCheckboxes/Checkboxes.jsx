import React, { useState } from "react";

const Checkboxes = ({ checkBoxesData, boxChecked, setBoxChecked,rootData }) => {
  function checkBoxHandler(parentnode) {
    setBoxChecked((prev) => {
      const updatedchecks = { ...prev };
      const checkState = !prev[parentnode.id];

      const updateChild = (data) => {
        updatedchecks[data.id] = checkState;

        data.children.forEach((childnode) => {
          updateChild(childnode);
        });
      };

      updateChild(parentnode);

      const updateParent = (node) => {
        node.forEach((data) => {
          if (data.children.length > 0) {
            updateParent(data.children);
            updatedchecks[data.id] = data.children.every(
              (child) => updatedchecks[child.id],
            );
          }
        });
      };
      updateParent(rootData);

      return updatedchecks;
    });
  }

  return (
    <div className="checkbox-container mt-2 p-2 border-b-2 border-l-2 border-gray-900">
      {checkBoxesData?.map((data) => (
        <>
          <div
            className="inputs-div flex flex-row gap-4 items-center "
            key={data?.id}
          >
            <span>
              <input
                type="checkbox"
                checked={boxChecked[data.id] || false}
                name={data?.id}
                className="bg-white"
                onChange={() => checkBoxHandler(data)}
              />
            </span>
            <label htmlFor={data.id}>{data.name}</label>
          </div>
          {data?.children.length > 0 && (
            <div className="pl-2">
              <Checkboxes
                checkBoxesData={data?.children || []}
                boxChecked={boxChecked}
                setBoxChecked={setBoxChecked}
                rootData={rootData}

              />
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default Checkboxes;
