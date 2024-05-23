import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Aleart from "./components/Aleart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Notestate from "./context/Notestate";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from "./components/Logout";

import { useState } from "react";

function App() {
  const [aleart, setaleart] = useState("");
  const showaleart = (message, type) => {
    setaleart(
      {
        msg: message,
        type: type,
      },
      setTimeout(() => {
        setaleart(null);
      }, 2000)
    );
  };
  return (
    <>
      <Router>
        <Navbar />
        <Aleart aleart={aleart}></Aleart>

        <Notestate>
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={<Home showaleart={showaleart} />}
              />
              <Route
                exact
                path="/Login"
                element={<Login showaleart={showaleart} />}
              />
              <Route
                exact
                path="/Logout"
                element={<Logout showaleart={showaleart} />}
              />
              <Route exact path="/About" element={<About />} />
              <Route exact path="/Signup" element={<Signup />} />
            </Routes>
          </div>
        </Notestate>
      </Router>
    </>
  );
}

export default App;
