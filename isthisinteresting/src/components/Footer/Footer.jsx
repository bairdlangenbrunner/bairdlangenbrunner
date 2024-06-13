import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer-div">
        <section className="footer-content">
        this site is maintained on github{" "}
          <Link
            to="https://github.com/bairdlangenbrunner/bairdlangenbrunner"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </Link>
        </section>
      </footer>
    </>
  );
}

export default Footer;
