import React, { useState } from "react";
import OptionCard from "./OptionCard";
import Progress from "./Progress";
import QuizCard from "./QuizCard";
const questions = [
  {
    id: 1,
    question: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    type: "Geography",
    correctAnswer: "New Delhi",
  },
  {
    id: 2,
    question: "Who is known as the Father of the Indian Constitution?",
    options: [
      "Mahatma Gandhi",
      "Dr. B. R. Ambedkar",
      "Jawaharlal Nehru",
      "Sardar Patel",
    ],
    type: "Indian Polity",
    correctAnswer: "Dr. B. R. Ambedkar",
  },
  {
    id: 3,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    type: "Science",
    correctAnswer: "Mars",
  },
  {
    id: 4,
    question: "Who was the first President of India?",
    options: [
      "Dr. Rajendra Prasad",
      "Dr. S. Radhakrishnan",
      "Jawaharlal Nehru",
      "Zakir Husain",
    ],
    type: "Indian History",
    correctAnswer: "Dr. Rajendra Prasad",
  },
  {
    id: 5,
    question: "Which is the longest river in India?",
    options: ["Yamuna", "Ganga", "Godavari", "Narmada"],
    type: "Geography",
    correctAnswer: "Ganga",
  },
  {
    id: 6,
    question: "Which gas is most abundant in Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    type: "Science",
    correctAnswer: "Nitrogen",
  },
  {
    id: 7,
    question: "Who wrote the national anthem of India?",
    options: [
      "Bankim Chandra Chattopadhyay",
      "Rabindranath Tagore",
      "Sarojini Naidu",
      "Subhas Chandra Bose",
    ],
    type: "Indian Culture",
    correctAnswer: "Rabindranath Tagore",
  },
  {
    id: 8,
    question: "Which is the largest state in India by area?",
    options: ["Madhya Pradesh", "Maharashtra", "Rajasthan", "Uttar Pradesh"],
    type: "Geography",
    correctAnswer: "Rajasthan",
  },
  {
    id: 9,
    question: "In which year did India gain independence?",
    options: ["1945", "1946", "1947", "1950"],
    type: "Indian History",
    correctAnswer: "1947",
  },
  {
    id: 10,
    question: "Which is the largest ocean in the world?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    type: "Geography",
    correctAnswer: "Pacific Ocean",
  },
];

const QuizApp = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  function nextQuestionhandler() {
    if (currIndex < questions.length - 1) {
      setCurrIndex(currIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  }
  const playAgainHandler = () => {
    setCurrIndex(0);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="w-full  flex justify-center flex-col items-center ">
      <Progress progress={60} currIndex={currIndex} score={score} />

      <QuizCard
        key={currIndex}
        question={questions[currIndex]}
        nextQuestionhandler={nextQuestionhandler}
        score={score}
        setScore={setScore}
      />
      {!quizCompleted ? (
        <button
          className="rounded-4xl text-white bg-amber-700 p-4 w-2/4 mt-6 cursor-pointer hover:bg-amber-500"
          onClick={() => nextQuestionhandler()}
        >
          next
        </button>
      ) : (
        <button
          className="rounded-4xl text-white bg-green-600 p-4 w-2/4 mt-6 cursor-pointer hover:bg-green-500"
          onClick={playAgainHandler}
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default QuizApp;
