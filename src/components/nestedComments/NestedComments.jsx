import React, { useState } from "react";
import "./comments.css";
import CommentCard from "./CommentCard";

const NestedComments = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      commentText: "hi my self this or that not matter",
      isChildren: true,
      children: [
        {
          id: 2,
          commentText: "hi my self this or that not matter",
          isChildren: false,
        },
      ],
    },

    {
      id: 3,
      commentText:
        "Since I remember you've been practicing recursive folder structures in React, a nested comments component uses the same recursive pattern:",
      isChildren: true,
      children: [
        {
          id: 4,
          commentText:
            "The only difference is that instead of children, you'll recurse over replies.",
          isChildren: true,
          children: [
            {
              id: 42,
              commentText:
                "The only difference is that instead of children, you'll recurse over replies.",
              isChildren: false,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      commentText:
        "Since I remember you've been practicing recursive folder structures in React, a nested comments component uses the same recursive pattern:",
      isChildren: false,
    },
  ]);


  return (
    <div className="nested-container">
      <div className="text-2xl font-bold">Comments</div>
      <CommentCard commentData={comments} setComments={setComments} />
    </div>
  );
};

export default NestedComments;
