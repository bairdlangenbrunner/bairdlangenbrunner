import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function NotFound() {
  return (
    <>
      <section className="body-section">
        <Header />
        <section className="main-section">
          <h1>oops</h1>
          <p>my bad : (</p>
          <p>this page doesn't seem to exist</p>
        </section>
      <Footer />
      </section>
    </>
  );
}

export default NotFound;
