import React, { useState } from "react";
import "./comments.css";
import CommentCard from "./CommentCard";

const NestedComments = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      commentText: "hi my self this or that not matter",
      children: [
        {
          id: 2,
          commentText: "hi my self this or that not matter",
          children: [],
        },
      ],
    },

    {
      id: 3,
      commentText:
        "Since I remember you've been practicing recursive folder structures in React, a nested comments component uses the same recursive pattern:",
      children: [
        {
          id: 4,
          commentText:
            "The only difference is that instead of children, you'll recurse over replies.",
          children: [
            {
              id: 42,
              commentText:
                "The only difference is that instead of children, you'll recurse over replies.",
                children:[]
            },
          ],
        },
      ],
    },
    {
      id: 5,
      commentText:
        "Since I remember you've been practicing recursive folder structures in React, a nested comments component uses the same recursive pattern:",
      children: [],
    },
  ]);

  const [newComment, setNewComment] = useState("");

  function addnewCommentHandler() {
    const text = newComment?.trim();
    if (!text) return;
    setComments((prev) => [
      ...prev,
      {
        id: Date.now(),
        commentText: text,
        children: [],
      },
    ]);
    setNewComment("")
  }

  return (
    <div className="nested-container">
      <div className="text-2xl font-bold">Comments</div>
      <CommentCard commentData={comments} setComments={setComments} />
      <div className="flex items-center mt-10">
        <input
          type="text"
          value={newComment}
          className="bg-gray-800 p-6  w-3/2 rounded-xl outline-none"
          placeholder="Type Your Comments"
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className="ml-2 bg-blue-950 text-white  p-6 rounded-xl cursor-pointer"
          onClick={() => addnewCommentHandler()}
        >
          Comment
        </button>
      </div>
    </div>
  );
};

export default NestedComments;
