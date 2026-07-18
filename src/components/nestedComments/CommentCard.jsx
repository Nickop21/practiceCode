import React, { useState } from "react";

const CommentCard = ({ commentData, setComments }) => {
  const [isCommentOpen, setIsCommentOpen] = useState({});
  const [reply, setReply] = useState({});
  const [newComment, setNewComment] = useState({});

  function toggleCommentsHandler(id) {
    setIsCommentOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  function openReplyInput(id) {
    setReply((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  function addnewCommentHandler(id) {
    const text = newComment[id]?.trim();

    if (!text) return;

    const updateComments = (comments) => {
      return comments.map((comment) => {
        if (comment.id === id) {
          return {
            ...comment,
            children: [
              ...(comment.children || []),
              {
                id: Date.now(),
                commentText: text,
                children: [],
              },
            ],
          };
        }

          return {
            ...comment,
            children: comment.children ? updateComments(comment.children) : [],
          };

      });
    };

    setComments((prev) => updateComments(prev));

    setReply((prev) => ({
      ...prev,
      [id]: false,
    }));

    setNewComment((prev) => ({
      ...prev,
      [id]: "",
    }));

    setIsCommentOpen((prev) => ({
      ...prev,
      [id]: true,
    }));
  }

  return (
    <>
      {commentData.map((data) => (
        <div key={data.id} className="border-b-2 py-3">
          <div className="flex items-start">
            <div className="bg-white rounded-full p-2 mr-2">👤</div>

            <span>{data.commentText}</span>

            {data.children?.length > 0 && (
              <button
                className={`ml-4 bg-blue-700 text-white px-2 py-1 rounded transition-transform duration-300 ${
                  isCommentOpen[data.id] ? "rotate-90" : ""
                }`}
                onClick={() => toggleCommentsHandler(data.id)}
              >
                ▶
              </button>
            )}
          </div>

          {reply[data.id] ? (
            <div className="ml-10 mt-3">
              <input
                placeholder="Add Reply..."
                value={newComment[data.id] || ""}
                className="border-b outline-none p-1"
                onChange={(e) =>
                  setNewComment((prev) => ({
                    ...prev,
                    [data.id]: e.target.value,
                  }))
                }
              />

              <button
                className="ml-4 bg-blue-700 text-white px-3 py-1 rounded"
                onClick={() => addnewCommentHandler(data.id)}
              >
                Comment
              </button>
            </div>
          ) : (
            <button
              className="ml-10 mt-3 bg-blue-700 text-white px-3 py-1 rounded"
              onClick={() => openReplyInput(data.id)}
            >
              💬 Reply
            </button>
          )}

          {isCommentOpen[data.id] && data.children?.length > 0 && (
            <div className="ml-10 mt-3 border-l-2 pl-4">
              <CommentCard
                commentData={data.children}
                setComments={setComments}
              />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default CommentCard;
