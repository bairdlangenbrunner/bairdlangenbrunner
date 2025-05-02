import "./index.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
// import SiteRoutes from "./components/SiteRoutes/SiteRoutes";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";

export default function App() {
  return (
    <BrowserRouter>
      {/* <div className="page-outline-div"> */}
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
            </Route>
          </Routes>
      {/* </div> */}
    </BrowserRouter>
  );
}
