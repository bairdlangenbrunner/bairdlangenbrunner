import React from "react";
import { Link } from "react-router-dom";
// import '../../index.css'

function Header() {
  return (
    <>
      <header
        id="header"
        className="header-div"
      >
        <section className="header-content">

            <Link to="/">is this interesting</Link>

          {/* <!-- <button id="mobile-open-button" class="text-lg sm:hidden"> */}
          {/* ☰ */}
          {/* </button> --> */}
          {/* <!-- <nav class="hidden sm:block sm:space-x-2 text-lg" aria-label="main"> --> */}
          <nav id="header-nav" aria-label="main">
            <Link to="/about" className="hidden">about</Link>
            <Link to="/archive" className="hidden">archive</Link>
            {/* <a href="../src/index.html">about</a> */}
            {/* <a href="../src/index.html">archive</a> */}
          </nav>
        </section>
      </header>
    </>
  );
}

export default Header;
