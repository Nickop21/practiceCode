import React, { useState } from "react";
import "./chip.css";
import ChipOption from "./ChipOption";
import { options } from "./chipData";

const ChipInput = () => {
  const [selectedChips, setSelectedChips] = useState([]);
  const [initialOptions, setInitialOptions] = useState(options);

  function removeChip(chipData, index) {
    const arr = selectedChips.filter(
      (chipData, ind) => ind !== index && chipData,
    );
    console.log(initialOptions);
    setInitialOptions((prev) =>
      prev.map((item) =>
        item.name == chipData.name ? { ...item, checked: false } : item,
      ),
    );
    setSelectedChips(arr);
  }
  return (
    <div>
      <div className="main-container">
        <div className="chip-block">
          {selectedChips.length ? (
            <>
              {selectedChips?.map((chipData, index) => (
                <div className="chips" key={index}>
                  <span>{chipData.name}</span>
                  <button
                    className="close"
                    onClick={() => removeChip(chipData, index)}
                  >
                    X
                  </button>
                </div>
              ))}
            </>
          ) : (
            <div className="chips">Add Options</div>
          )}
        </div>
        {/* <button className="btn-action">➕</button> */}
      </div>

      <ChipOption
        options={initialOptions}
        setInitialOptions={setInitialOptions}
        setSelectedChips={setSelectedChips}
        selectedChips={selectedChips}
      />
    </div>
  );
};

export default ChipInput;
