import { useState } from "react";
import "./index.css";
import {Link, Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import FavoriteResources from "./pages/FavoriteResources";
import FirstPost from "./pages/posts/FirstPost";
import About from "./pages/About";
import Archive from "./pages/Archive";

function App() {

  return (
  <>
    <nav className="hidden">
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/favorites">favorite resources</Link></li>
        <li><Link to="/posts">inaugural post</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/about" element={<About />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/favorites" element={<FavoriteResources />} />
      <Route path="/posts/:id" element={<FirstPost />} />
    </Routes>
  </>
  )
}
export default App;
