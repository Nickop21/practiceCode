import React from "react";

const Pages = ({ totalPages, pageChange, currPage }) => {
  console.log(currPage);

  return (
   <div className=" relative  bg-white my-4 rounded flex justify-center">
      <div className="flex relative p-2 justify-evenly gap-2 items-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <div
            className={`  p-3 rounded  ${index == currPage ? "bg-black" : "bg-red-500 hover:bg-red-400"}`}
            key={index + 1}
            onClick={() => pageChange(index)}
          >
            <span>{index + 1}</span>
          </div>
        ))}

        <button
          className={`absolute -left-15  p-3 rounded bg-red-500 hover:bg-red-400 ${currPage <= 0 ? "hidden" : "block"}`}
          onClick={() => pageChange((prev) => prev - 1)}
          disabled={currPage <= 0}
        >
          <span>⬅️</span>
        </button>

        <button
          className={`absolute -right-15  p-3 rounded bg-red-500 hover:bg-red-400 ${currPage >= totalPages - 1 ? "hidden" : "block"}`}
          onClick={() => pageChange((prev) => prev + 1)}
          disabled={currPage >= totalPages - 1}
        >
          <span>➡️</span>
        </button>
      </div>
    </div>
  );
};

export default Pages;
