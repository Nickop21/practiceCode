import React, { useState } from "react";

const ExplorerList = ({ list }) => {
    const [isExpandable,setIsExpandable]=useState(false)
     const toggleFolder = (id) => {
    setIsExpandable((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <>
      {list?.map((data) => (
        <div className={` parent-list ${!data.isFolder && "ml-6"}`} key={data?.id}>
          <div>
            {data.isFolder && <span className="mr-1 cursor-pointer" onClick={()=>toggleFolder(data.id)}>{isExpandable[data.id] ? "➡️" :"⬇️"}</span>
}
             <span className="mr-1">{data.isFolder? "📁" :"📃"}</span>
            <span>{data?.name}</span>
          </div>
          {isExpandable[data.id] && data?.children && <ExplorerList list={data.children} />}
        </div>
      ))}
    </>
  );
};

export default ExplorerList;
