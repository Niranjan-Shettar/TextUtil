import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("null");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        Abtext="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div class="my-3">
        <Alert alert={alert} />
      </div>
      <div className="container my-3">
        <Textform
          showAlert={showAlert}
          heading="Try! TextUtils- Word Counter,Character Counter,Remove Extra Spaces"
          mode={mode}
        />
      </div>
    </>
  );
}
export default App;
