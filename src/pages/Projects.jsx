import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <div className="title-section">
        <h1 className="title-away">projects</h1>
      </div>
      <article>
        <p>
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
              I've have a{" "}
              <Link
                to="https://isthisinteresting.bairdlangenbrunner.com"
                target="_blank"
              >
                blog
              </Link>{" "}
              that I'm updating — at an admittedly inconsistent clip — these
              days
            </li>
            <br />
            <p>
              <span style={{ fontWeight: "bold" }}>
                Some (at times crude) games:
              </span>
            </p>
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
        </p>
      </article>
    </>
  );
}

export default Projects;
