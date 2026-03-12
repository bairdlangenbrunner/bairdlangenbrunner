import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="div-title">
        <h1 className="title-away">about</h1>
      </div>

      <section>
        <p>Hi, I'm Baird.</p>
        <p>
          I'm a climate scientist working in energy transition research at{" "}
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
          I believe very strongly in open-source data and software, especially
          when they're leveraged to do cool climate work. I'm interested in maps
          and design, data visualization, making stuff with my hands and
          computer, and science communication.
        </p>
        <p>I'm based in NYC.</p>
      </section>
    </>
  );
}

export default About;
