import React, { useState } from "react";
import "./nested.css";
import Checkboxes from "./Checkboxes";

const NestedCheckbox = () => {
  const [checkBoxesData, setCheckBoxesData] = useState([
    {
      id: 1,
      name: "fruits",
      children: [
        {
          id: 2,
          name: "mango",
          children: [
            {
              id: 3,
              name: "dashheri",
              children: [
                {
                  id: 4,
                  name: "lagda",
                  children: [],
                },
                {
                  id: 487,
                  name: "lagda",
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "sports",
      children: [
        {
          id: 6,
          name: "cricket",
          children: [
            {
              id: 44,
              name: "indoor",
              children: [{
                  id: 4643,
                  name: "lagda",
                  children: [],
                },],
            },
            {
              id: 55,
              name: "outdore",
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 7,
      name: "fruits",
      children: [{ id: 22, name: "mango", children: [] }],
    },
  ]);
  const [boxChecked, setBoxChecked] = useState({});

  return (
    <div className="nested-container w-full md:w-3/5">
      <h1 className="mb-10 font-extrabold text-2xl">NestedCheckbox</h1>
      <Checkboxes
        checkBoxesData={checkBoxesData}
        boxChecked={boxChecked}
        setBoxChecked={setBoxChecked}
        rootData={checkBoxesData}
      />
    </div>
  );
};

export default NestedCheckbox;


/// root data to take care of parent refences also without this we are know about cuu node not its parent