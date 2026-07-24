import React, { useEffect, useRef, useState } from "react";
import "./shape.css";

const Interactiveshape = () => {
  const [grid, setGrid] = useState(
    Array.from({ length: 3 }, () => new Array(3).fill(false)),
  );
  const queueRef = useRef([]);
  const timerRef = useRef([]);


  function handlerIntrectiveShape(rowIndx, colIndx, flag) {
    if(timerRef.current.length>0 && flag) return
    if (grid[rowIndx][colIndx] && flag) return;
    setGrid((prev) => {
      const deepCopy = prev.map((row) => [...row]);
      deepCopy[rowIndx][colIndx] = flag;
      flag == true && queueRef.current.push([rowIndx, colIndx]);
      return deepCopy;
    });
  }
  useEffect(() => {
    if (queueRef.current.length == 9) {
      queueRef.current.forEach(([rowIndx, colIndx], indx) => {
      timerRef.current[indx]= setTimeout(
          () => {
            handlerIntrectiveShape(rowIndx, colIndx, false);
           
            if(indx==timerRef.current.length-1){
                timerRef.current=[]
            }

          },
          1000 * (indx + 1),
        );
      });
      queueRef.current = [];
    }
  }, [grid]);

  useEffect(() => {
    return ()=>{

        timerRef.current.forEach((id)=>clearTimeout(id))
    }
   
   
  }, [])
  

  return (
    <div className="shape-parent">
      {grid.map((row, rowIndx) => {
        return row.map((col, colIndx) => (
          <div
            className={`shape  ${grid[rowIndx][colIndx] && "active"}`}
            onClick={() => handlerIntrectiveShape(rowIndx, colIndx, true)}
            key={rowIndx + "-" + colIndx}
          ></div>
        ));
      })}
    </div>
  );
};

export default Interactiveshape;
