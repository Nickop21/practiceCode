import React, { useEffect, useState } from "react";
import OptionCard from "./OptionCard";

const QuizCard = ({ key ,question,nextQuestionhandler ,score, setScore }) => {
  function ScoreHandler() {
    setScore((prev) => prev + 1);
    
  }
  function nextHandler() {
    setTimeout(() => {
      nextQuestionhandler()
    }, 1000);
  }


  return (
    <div className="w-full md:w-2/4 p-4 " key={key}>
      <div className="flex justify-center items-center relative my-8">
        <div className="absolute -top-10 rounded-full w-24 h-24 bg-blue-900 border-12 border-black flex justify-center items-center text-2xl text-white font-extrabold">
          <span>
            <span className="border-6 border-amber-200 bg-blue-950 rounded-full p-3">
              {score}
            </span>
          </span>
        </div>
        <div className="bg-blue-950 w-full  rounded-4xl flex justify-center items-center flex-col p-6 ">
          <h1 className="text-white font-extrabold text-xl md:text-2xl mt-12 ">
            Question <span className="text-orange-600">{question?.id}</span>
          </h1>
          <p className="text-gray-400 text-xl my-6">sports quiz</p>
          <p className="text-white text-xl md:text-2xl font-extrabold text-center border-dotted border-t-2 border-gray-500 p-4">
            {question.question}
          </p>
        </div>
      </div>
      <div className="flex  gap-4 flex-wrap">
        {question.options.map((data) => (
          
          <OptionCard
            optionData={data}
            correctOption={question.correctAnswer}
            ScoreHandler={ScoreHandler}
            nextHandler={nextHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizCard;
