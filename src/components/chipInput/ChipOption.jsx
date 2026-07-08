import React, { useEffect, useState } from "react";

const ChipOption = ({
  options,
  setInitialOptions,
  setSelectedChips,
  selectedChips,
}) => {
  function addselectChips(data) {
    const hasNameField = selectedChips.some((item) => item.name === data.name);

    if (hasNameField) return;
    setSelectedChips((prev) => [
      ...prev,
      {
        ...data,
        checked: true,
      },
    ]);

    setInitialOptions((prev) =>
      prev.map((item) =>
        item.name == data.name ? { ...item, checked: true } : item,
      ),
    );
  }

  return (
    <div className="chip-option-container">
      {options?.map((data) => (
        <button
          className={`flex chip-option-parent   ${data?.checked ? "bg-green-400 " : "bg-blue-100 hover:bg-blue-300"}`}
          key={data.name}
          onClick={() => addselectChips(data)}
        >
          <div className="chip-options">{data?.name}</div>
          {data.logo && (
            <img src={data.logo} alt={data.name} className="img-logo" />
          )}
        </button>
      ))}
    </div>
  );
};

export default ChipOption;
