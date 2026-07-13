import React, { useState } from "react";

const ExplorerList = ({ list, setFileData }) => {
  const [isExpandable, setIsExpandable] = useState(false);
  const toggleFolder = (id) => {
    setIsExpandable((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  function addNodeTOList(parentId) {
    const nameadd = prompt("Enter Your Name");

    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id == parentId) {
          return {
            ...node,
            children: [
              ...node.children,
              {
                id: nameadd,
                name: nameadd,
                isFolder: true,
                children: [],
              },
            ],
          };
        }

        if (node.children) {
          return {
            ...node,
            children: updateTree(node.children),
          };
        }

        return node;
      });
    };
    setFileData((prev) => updateTree(prev));
  }

  return (
    <>
      {list?.map((data) => (
        <div
          className={` parent-list ${!data.isFolder && "ml-6"}`}
          key={data?.id}
        >
          <div>
            {data.isFolder && (
              <span
                className="mr-1 cursor-pointer"
                onClick={() => toggleFolder(data.id)}
              >
                {isExpandable[data.id] ? "➡️" : "⬇️"}
              </span>
            )}
            <span className="mr-1">{data.isFolder ? "📁" : "📃"}</span>
            <span>{data?.name}</span>
            <span className="mr-2" onClick={() => addNodeTOList(data.id)}>
              {data.isFolder && "  ➕"}
            </span>
          </div>
          {isExpandable[data.id] && data?.children && (
            <ExplorerList list={data.children} setFileData={setFileData} />
          )}
        </div>
      ))}
    </>
  );
};

export default ExplorerList;
