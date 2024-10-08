import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Welcome from "./components/Welcome";
import Alert from "./components/Alert.jsx";
import About from "./components/About.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [initialized, setInitialized] = useState(false);

  const darkMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#574D68";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  function showAlert(message, type) {
    setAlert({
      message,
      type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  // Making first letter capital
  function Capitalize(word) {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  // State initialization, mounting, updating, unmounting
  useEffect(() => {
    showAlert("Welcome to the text manipulation website ", "success");
    console.log("mounted");
    return console.log("unmounted");
  }, []);

  // ---------
  const Start = () => {
    if (initialized) {
      setInitialized(false);
    } else {
      setInitialized(true);
    }
  };

  return (
    <>
      {!initialized && <Welcome Start={Start} />}
      {initialized && (
        <BrowserRouter basename="/text-tactics-app">
          <Navbar title={"Text Tactics"} darkModeFunc={darkMode} mode={mode} />
          <Alert alert={alert} Capitalize={Capitalize} />
          <div className="container p-0">
            <Routes>
              <Route
                exact
                path="/about"
                element={<About mode={mode} />}
              ></Route>
              <Route
                exact
                path="/"
                element={
                  <TextForm
                    showAlert={showAlert}
                    heading="Manipulate your text skilfully"
                    mode={mode}
                    Capitalize={Capitalize}
                  />
                }
              ></Route>
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </>
  );
}

// Navbar.propTypes = {
//   title: PropTypes.string,
// propName: PropTypes.propType
// }

export default App;

// import About from "./components/About";
//         <About/>
//
