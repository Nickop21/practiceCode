import { useState } from "react";
import "./App.css";
import TabSwitcher from "./components/TabSwitcher";
import Pagination from "./components/pagination/Pagination";
import Search from "./components/autoCompleteSearch/Search";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  function activeIndexChange(index) {
    setActiveIndex(index);
    console.log(index);
    
  }
  return (
    <div className="bg-black w-full max-w-7xl mx-auto h-full">
      <div className=" p-24 ">
        {/* <TabSwitcher activeIndex={activeIndex} activeIndexChange={activeIndexChange} /> */}
        {/* <Pagination/> */}
        <Search/>
      </div>
    </div>
  );
}

export default App;
