import "./App.css";
import React, { useState } from "react";
import { Activelinks } from "./components/Activelinks";
import { Imagetext } from "./components/Imagetext";
import { Profilelinks } from "./components/Profilelinks";
import { Images } from "./components/Images";

function App() {
  const [showActivelinks, setShowActivelinks] = useState(false);
  const handleButtonClick = () => {
    setShowActivelinks((prevState) => !prevState);
  };
  return (
    <div className="container-all">
      <Images />
      <div className="container-desktop">
        <Imagetext />
        <Profilelinks handleButtonClick={handleButtonClick} />
        {showActivelinks && <Activelinks handleButtonClick={handleButtonClick} />}
      </div>
    </div>
  );
}

export default App;
