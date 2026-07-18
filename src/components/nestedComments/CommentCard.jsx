import React, { useState } from "react";

const CommentCard = ({ commentData }) => {
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  function toggleCommentsHandler(id) {
    setIsCommentOpen((prev)=>({...prev,[id]:!prev[id]}))
  }
  const Card = ({ data }) => {
    return (
      <div className="comment-card " >
        <div className="flex">
          <div className="bg-white rounded-3xl h-fit p-1 mr-2">👤</div>

          <span>{data.commentText}</span>
        </div>
        <div>
          <button className="bg-blue-700 p-2 mt-4 rounded-2xl ml-10">
            💬Reply
          </button>
          {
            data.isChildren &&
          <button
            className={`bg-amber-500 p-2 rounded-xl ml-6 inline-block cursor-pointer ${isCommentOpen[data.id] ? "rotate-90" : "rotate-0"}`}
            onClick={()=>toggleCommentsHandler(data.id)}
          >
            ⮞
          </button>
          
          }
        </div>
      </div>
    );
  };
  return (
    <>
      {commentData?.map((data) => (
        <div className="border-b-2" key={data.id}>
          <Card data={data} />
          {
            isCommentOpen[data.id] &&
          <div className="ml-18">
            {data.isChildren && <CommentCard commentData={data.children} />}
          </div>
          }
          </div>
      ))}
    </>
  );
};

export default CommentCard;
