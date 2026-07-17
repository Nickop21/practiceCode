import { useState } from "react";
import "./App.css";
import TabSwitcher from "./components/TabSwitcher";
import Pagination from "./components/pagination/Pagination";
import Search from "./components/autoCompleteSearch/Search";
import Accordian from "./components/accordian/Accordian";
import ProgressBar from "./components/progressbar/ProgressBar";
import OtpInput from "./components/otpInput/OtpInput";
import Todo from "./components/todo/Todo";
import ChipInput from "./components/chipInput/ChipInput";
import FileExplorer from "./fileExplorer/FileExplorer";
import Stepper from "./components/stepper/Stepper";
import Rating from "./ratings/Rating";
import ImageCarousel from "./components/carousel/ImageCarousel";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [componentActiveIndex, setComponentActiveIndex] = useState(0);

  const Component = [
    {
      name: "Carousel",
      component: <ImageCarousel />,
    },
    {
      name: "Ratings",
      component: <Rating />,
    },
    {
      name: "Stepper",
      component: <Stepper />,
    },
    {
      name: "File Explorer",
      component: <FileExplorer />,
    },
    {
      name: "Chip Input",
      component: <ChipInput />,
    },
    {
      name: "TODO",
      component: <Todo />,
    },
    {
      name: "OtpInput",
      component: <OtpInput />,
    },
    {
      name: "ProgressBar",
      component: <ProgressBar />,
    },
    {
      name: "Pagination",
      component: <Pagination />,
    },
    {
      name: "Search",
      component: <Search />,
    },

    {
      name: "Accodian",
      component: <Accordian />,
    },
    {
      name: "TabSwitcher",
      component: (
        <TabSwitcher
          activeIndex={activeIndex}
          activeIndexChange={activeIndexChange}
        />
      ),
    },
  ];
  function activeIndexChange(index) {
    setActiveIndex(index);
  }

  function componetChanger(index) {
    setComponentActiveIndex(index);
  }

  return (
    <div className="bg-black w-fit md:w-full max-w-7xl mx-auto h-full ">
      <div className="pt-14   ">
        <div className="flex gap-3 flex-wrap overflow-x-scroll justify-evenly scrollbar-thumb-amber-300  scrollbar-track-none items-center pb-2">
          {Component.map((d, index) => (
            <>
              <div
                className={`text-white font-bold rounded-xl p-3 text-nowrap  ${componentActiveIndex == index ? "bg-amber-400" : "bg-red-300"} transition-colors duration-300 ease-in-out`}
                key={d.name}
                onClick={() => componetChanger(index)}
              >
                {d.name}
              </div>
            </>
          ))}
        </div>
      </div>
      <div className=" p-10 lg:p-30 pt-10 w-full ">
        {Component[componentActiveIndex].component}
      </div>

      {/* <TabSwitcher  /> */}
    </div>
  );
}

export default App;
