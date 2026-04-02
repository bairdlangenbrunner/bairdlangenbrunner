import React, { useEffect } from "react";

function About() {
  useEffect(() => { document.title = "About — Baird Langenbrunner"; }, []);
  return (
    <>
      <div className="div-title">
        <h1 className="title-away">about</h1>
      </div>

      <section>
        <p>Hi, I'm Baird.</p>
        <p>
          I'm a climate scientist working in energy transition research at{" "}
          <a href="https://globalenergymonitor.org/" target="_blank" rel="noopener noreferrer">
            Global Energy Monitor
            <span className="sr-only">(opens in new tab)</span>
          </a>
          , where I've managed{" "}
          <a
            href="https://globalenergymonitor.org/projects/global-oil-infrastructure-tracker/"
            target="_blank"
            rel="noopener noreferrer"
          >
            oil
            <span className="sr-only">(opens in new tab)</span>
          </a>{" "}
          and{" "}
          <a
            href="https://globalenergymonitor.org/projects/global-gas-infrastructure-tracker/"
            target="_blank"
            rel="noopener noreferrer"
          >
            gas
            <span className="sr-only">(opens in new tab)</span>
          </a>{" "}
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
