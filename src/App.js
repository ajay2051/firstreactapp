import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  const [mode, setMode] = useState("light");
  const [buttonText, setButtonText] = useState("Dark Mode");

  const toggleMode = () => {
    if (mode === "light" && buttonText==='Dark Mode') {
      setMode("dark");
      document.body.style.background = 'black'
      setButtonText('Light Mode')
    }
    else{
      setMode("light");
      document.body.style.background = 'white'
      setButtonText('Dark Mode')
    }
  };

  return (
    <div className="App">
      <>
        <Navbar
          title="TextUtils"
          about="About Utils"
          buttonText={buttonText}
          mode={mode}
          toggleMode={toggleMode}
        />
        <div className="container my-3">
          
          <br />
          <br />
          <Textform heading="Enter Text to Analyze" mode={mode}/>
        </div>
      </>
    </div>
  );
}

export default App;
