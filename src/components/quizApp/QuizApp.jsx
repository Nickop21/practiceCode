import React from "react";
import OptionCard from "./OptionCard";
import Progress from "./Progress";
const arr=["jsds","kskmdks","ncbvha","hfknjaf"]

const QuizApp = () => {
  return (
    <div className="w-full  flex justify-center flex-col items-center ">
      <Progress progress={60}/>
      <div className="w-full md:w-2/4 p-4 ">
        <div className="flex justify-center items-center relative my-8">
          <div className="absolute -top-10 rounded-full w-24 h-24 bg-blue-900 border-12 border-black flex justify-center items-center text-2xl text-white font-extrabold">
            <span>
              <span className="border-6 border-amber-200 bg-blue-950 rounded-full p-3">
                20
              </span>
            </span>
          </div>
          <div className="bg-blue-950 w-full  rounded-4xl flex justify-center items-center flex-col p-6 ">
            <h1 className="text-white font-extrabold text-xl md:text-2xl mt-12 ">
              Question <span className="text-orange-600">01</span>
            </h1>
            <p className="text-gray-400 text-xl my-6">sports quiz</p>
            <p className="text-white text-xl md:text-2xl font-extrabold text-center border-dotted border-t-2 border-gray-500 p-4">
              what is the most popular sports throught the world?
            </p>
          </div>
        </div>
        <div className="flex  gap-4 flex-wrap">
          {arr.map((data)=>(

        <OptionCard optionData={data} />
          ))}
        </div>
      </div>
        <button className="rounded-4xl text-white bg-amber-700 p-4 w-2/4 mt-6">next</button>
    </div>
  );
};

export default QuizApp;
