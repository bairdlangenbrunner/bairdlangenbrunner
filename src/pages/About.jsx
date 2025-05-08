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
          and design, data visualization, and science communication, and I've
          been teaching myself how to make things online lately. Check back here for more things to come.
        </p>
        {/* <p>
          I studied geophysics in college and did graduate work in atmospheric
          and oceanic sciences. After about a decade in academia, I moved to an
          editorial role at{" "}
          <Link to="https://www.nature.com/nclimate/" target="_blank">
            Nature Climate Change
          </Link>
          , where I was before I began my current position.
        </p> */}
        <p>I'm based in NYC, and I like to explore this city endlessly.</p>
        <p>
          <span style={{ fontWeight: "700" }}>Contact me:</span>
          <br />
          I'm{" "}
          <Link to="https://x.com/heyitsbaird" target="_blank">
            @heyitsbaird
          </Link>{" "}
          on X and other social media, and my personal email is
          bairdlangenbrunner [at] gmail [dot] com.
        </p>
      </section>
    </>
  );
}

export default About;
