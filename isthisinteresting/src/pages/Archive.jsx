import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import FirstPost from "./posts/FirstPost";
import { Link } from "react-router-dom";

function Archive() {
  return (
    <>
      <div className="body-div">
        <Header />
        <div className="main-div">
          <article>
            <h1>archive</h1>
            <p><Link to="/posts/first-post">this</Link> is all I have so far</p>
          </article>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Archive;
