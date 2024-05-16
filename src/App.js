import logo from "./logo.svg";
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

function App() {
  return (
    <>
      <Notestate>
        <Router>
          <Navbar />
          <Aleart></Aleart>
          <div className="container">
            <Routes>
              <Route exact path="/Login" element={<Login />} />
            </Routes>
            <Routes>
              <Route exact path="/Logout" element={<Logout />} />
            </Routes>
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
            <Routes>
              <Route exact path="/About" element={<About />} />
            </Routes>

            <Routes>
              <Route exact path="/Signup" element={<Signup />} />
            </Routes>
          </div>
        </Router>
      </Notestate>
    </>
  );
}

export default App;
