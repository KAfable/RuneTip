import React from "react";
import DPSCalculator from "./components/layout/DPSCalculator";
import GearContext from "./context/gearContext";
import "./App.css";

const App = () => {
  return (
    <GearContext.Provider value={GearContext}>
      <div className="App">
        Testing
        <DPSCalculator />
      </div>
    </GearContext.Provider>
  );
};

export default App;
