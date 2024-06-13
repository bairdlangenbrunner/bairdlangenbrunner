import React from "react";
// import '../../index.css'
import homolosine from "../../../graphics/homolosine-filled-width-height-100.svg";

function Homolosine() {
  return (
    <>
      <section className="homolosine-section">
        <img
          className="w-[100vw] hover:animate-pulse"
          src={homolosine}
          alt="homolosine"
        />
      </section>
    </>
  );
}

export default Homolosine;
