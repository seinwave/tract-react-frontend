import React from "react";
import AuthButton from "./components/AuthButton/AuthButton";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="row auth-button-row">
        <div className="col auth-button-col">
          <AuthButton />
        </div>
      </div>
    </div>
  );
}

export default App;
