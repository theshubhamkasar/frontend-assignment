import React, { useState } from "react";
import { Navbar } from "./Components/Navbar";
import { Main } from "./Components/Main";
import { Categories } from "./Components/Categories";
import "./App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return (
          <div>
            <Main />
          </div>
        );
      case "Categories":
        return (
          <div>
            <Categories/>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderContent()}
    </div>
  );
};

export default App;
