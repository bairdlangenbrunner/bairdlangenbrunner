import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function About() {
  return (
    <>
      <div className="body-div">
        <Header />
        <div className="main-div">
          <article>
            <h1>about</h1>
            <h2></h2>
            <p>Hi, I'm Baird, and I'm starting this project for fun.</p>
          </article>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
