import { useState } from "react";
import "./App.css";
import TabSwitcher from "./components/TabSwitcher";
import Pagination from "./components/pagination/Pagination";
import Search from "./components/autoCompleteSearch/Search";
import Accordian from "./components/accordian/Accordian";
import ProgressBar from "./components/progressbar/ProgressBar";
import OtpInput from "./components/otpInput/OtpInput";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [componentActiveIndex, setComponentActiveIndex] = useState(0);

  const Component = [
     {
      name: "OtpInput",
      component: <OtpInput/>,
    },
      {
      name: "ProgressBar",
      component: <ProgressBar/>,
    },
     {
      name: "Pagination",
      component: <Pagination/>,
    },
    {
      name: "Search",
      component: <Search/>,
    },
   
    {
      name: "Accodian",
      component: <Accordian/>,
    },
     {
      name: "TabSwitcher",
      component: <TabSwitcher activeIndex={activeIndex} activeIndexChange={activeIndexChange}/>,
    },
  ];
  function activeIndexChange(index) {
    setActiveIndex(index);
    console.log(index);
  }

  function componetChanger(index) {
    setComponentActiveIndex(index);
  }

  return (
    <div className="bg-black w-full max-w-7xl mx-auto h-full">
      <div className="flex justify-evenly items-center p-4 pt-14 border-b-2 border-b-amber-300">
        {Component.map((d, index) => (
          <>
            <div
              className={`text-white font-bold rounded-xl p-3  ${componentActiveIndex==index ? "bg-amber-400" :"bg-red-300"} transition-colors duration-300 ease-in-out`}
              key={d.name}
              onClick={() => componetChanger(index)}
            >
              {d.name}
            </div>
          </>
        ))}
      </div>
      <div className=" p-40 pt-10">
        {Component[componentActiveIndex].component}
      </div>

      {/* <TabSwitcher  /> */}
    
    </div>
  );
}

export default App;
