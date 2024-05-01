import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Notestate from "./context/Notestate";

function App() {
  return (
    <>
      <Notestate>
        <Router>
          <Navbar />
          <div class="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
            <Routes>
              <Route exact path="/About" element={<About />} />
            </Routes>
          </div>
        </Router>
      </Notestate>
    </>
  );
}

export default App;
