import React, { useEffect, useState } from "react";

const Typing = () => {
  const names = ["Software", "Frontend", "Backend"];

  const [curIndex, setCurIndex] = useState(0);
  const [words, setWords] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {
  const currentWord = names[curIndex];
  let timeout;

  if (!isDeleting) {
    // Typing
    if (charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setWords((prev) => prev + currentWord[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 200);
    } else {
      // Finished typing, wait then start deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1000);
    }
  } else {
    // Deleting
    if (charIndex > 0) {
      timeout = setTimeout(() => {
        setWords((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, 100);
    } else {
      // Finished deleting, move to next word
      setIsDeleting(false);
      setCurIndex((prev) => (prev + 1) % names.length);
    }
  }

  return () => clearTimeout(timeout);
}, [charIndex, curIndex, isDeleting]);

  return <div className="text-white font-extrabold text-7xl">{words}|</div>;
};

export default Typing;
