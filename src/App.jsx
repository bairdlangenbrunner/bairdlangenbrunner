import { useState } from "react";
import "./index.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <nav className="hidden">
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about"></Link>about
          </li>
          <li>
            <Link to="/projects"></Link>projects
          </li>
          <li>
            <Link to="https://isthisinteresting.bairdlangenbrunner.com/">interesting</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
