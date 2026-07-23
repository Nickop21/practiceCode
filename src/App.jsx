import {useState } from "react";
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
import Infinite from "./components/infiniteScroll/Infinite";
import NestedComments from "./components/nestedComments/NestedComments";
import NestedCheckbox from "./components/nestedCheckboxes/NestedCheckbox";
import Typing from "./components/typingEffect/Typing";
import Drag from "./components/dragDrop/Drag";
import ToolTip from "./components/toolTip/ToolTip";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [componentActiveIndex, setComponentActiveIndex] = useState(0);
  const [toolTipText,setToolTipText]=useState("")
  const [toolTipActiveIndex,setToolTipActiveIndex]=useState(null)

  const Component = [
      {
      name: "Drag And Drop",
      component: <Drag />,
    },
     {
      name: "Typing Effect",
      component: <Typing />,
    },
      {
      name: "Nested CheckBoxes",
      component: <NestedCheckbox />,
    },
     {
      name: "Nested Comments",
      component: <NestedComments />,
    },
     {
      name: "Infinite Scroll",
      component: <Infinite />,
    },
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
  function tooltipMouseEnter(e,text,index) {
    setToolTipText(text)
    setToolTipActiveIndex(index)
    
  }
  function tooltipmouseLeave(e) {
    setToolTipActiveIndex(null)
  }
 
  

  return (
    <div className="bg-black  w-full max-w-7xl mx-auto h-full ">
        <div className=" flex gap-3 p-6 overflow-x-scroll scrollbar-thumb-amber-300  scrollbar-track-none  ">
          {Component.map((d, index) => (
            <>
              <div
                className={`relative text-white font-bold rounded-xl p-3 text-xs md:text-lg text-nowrap cursor-pointer  ${componentActiveIndex == index ? "bg-amber-400" : "bg-red-300"} transition-colors duration-300 ease-in-out`}
                key={d.name}
                onClick={() => componetChanger(index)}
                onMouseEnter={(e)=>tooltipMouseEnter(e,d.name,index)}
                onMouseLeave={(e)=>tooltipmouseLeave(e)}
              >
                {d.name}
             {toolTipActiveIndex==index &&
              <ToolTip data={toolTipText}/>
             }
              </div>
            </>
          ))}
        </div>
      <div className=" p-4 lg:p-10 pt-6 w-full ">
        {Component[componentActiveIndex].component}
      </div>

    </div>
  );
}

export default App;
