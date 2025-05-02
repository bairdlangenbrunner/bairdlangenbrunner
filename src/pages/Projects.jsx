import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <div className="div-title">
        <h1 className="title-away">projects</h1>
      </div>
      <section>
        <ul>
          <li>
            You can find work-related stuff, and some personal projects, on my{" "}
            <Link to="https://github.com/bairdlangenbrunner" target="_blank">
              GitHub
            </Link>
          </li>
          <li>
            My academic work is on my{" "}
            <Link
              to="https://scholar.google.com/citations?user=QWDQ5fIAAAAJ"
              target="_blank"
            >
              Google Scholar
            </Link>{" "}
            page
          </li>

          <li>
            I'm also tinkering with an inconsistently updated{" "}
            <Link
              to="https://isthisinteresting.bairdlangenbrunner.com"
              target="_blank"
            >
              blog
            </Link>{" "}
            lately
          </li>
        </ul>

        <br />
        <span style={{ fontWeight: "700" }}>Other things:</span>
        <ul>
          <li>
            <Link
              to="https://tictacbutthole.bairdlangenbrunner.com"
              target="_blank"
            >
              ttb
            </Link>
          </li>
          <li>
            <Link to="https://get10.bairdlangenbrunner.com" target="_blank">
              get10
            </Link>
          </li>
          <li>
            <Link to="https://word.bairdlangenbrunner.com" target="_blank">
              word
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Projects;
