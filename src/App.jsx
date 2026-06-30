import { useState } from "react";
import "./App.css";
import TabSwitcher from "./components/TabSwitcher";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  function activeIndexChange(index) {
    setActiveIndex(index);
    console.log(index);
    
  }
  return (
    <div className="bg-black h-screen w-full max-w-7xl mx-auto">
      <div className=" p-44">
        <TabSwitcher activeIndex={activeIndex} activeIndexChange={activeIndexChange} />
      </div>
    </div>
  );
}

export default App;
