import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="page-outline-div">
        <Header />
        <div className="title-section">
          <h1 className="title-away">about</h1>
        </div>

        <article>
          <p>
            <strong>Hi, I'm Baird.</strong> I'm a climate scientist working in
            energy transition research at{" "}
            <Link to="https://globalenergymonitor.org/" target="_blank">
              Global Energy Monitor
            </Link>
            , where I've managed{" "}
            <Link
              target="_blank"
              to="https://globalenergymonitor.org/projects/global-oil-infrastructure-tracker/"
            >
              oil
            </Link>{" "}
            and{" "}
            <Link
              target="_blank"
              to="https://globalenergymonitor.org/projects/global-gas-infrastructure-tracker/"
            >
              gas
            </Link>{" "}
            infrastructure databases since I joined in 2021.
          </p>
          <p>
            I've spent a lot of my career using Python and matplotlib to wrangle
            and visualize data. I'm interested in maps and design, and weather
            and climate, and I've been teaching myself how to make things online
            lately. I believe very strongly in open-source and creative commons
            stuff.
          </p>
          <p>
            I studied geophysics in college and then did graduate work in
            atmospheric and oceanic sciences. After about a decade in academia,
            I shifted to work as an academic editor at{" "}
            <Link to="https://www.nature.com/nclimate/" target="_blank">
              Nature Climate Change
            </Link>
            , where I was before I began my current role.
          </p>
          <p>
            <strong>Contact me:</strong> my email address is my first and last
            name at gmail. I'm{" "}
            <Link to="https://twitter.com/heyitsbaird" target="_blank">
              @heyitsbaird
            </Link>{" "}
            on social.
          </p>
        </article>

        <Footer />
      </div>
    </>
  );
}

export default About;
