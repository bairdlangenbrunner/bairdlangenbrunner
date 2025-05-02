import React from 'react'
import homoK from "../../graphics/homolosine-filled-width-height-100.svg"
// import homoM from "../../graphics/homolosine-filled-magenta-width-height-100.svg";
// import homoY from "../../graphics/homolosine-filled-yellow-width-height-100.svg";
// import homoC from "../../graphics/homolosine-filled-cyan-width-height-100.svg";

export default function Homolosines() {
  return (
    <>
      <div className="homolosine-div">
        <img id="homoK" src={homoK} alt="homolosine" />
        {/* <img id="homoM" src={homoM} alt="homolosine" /> */}
        {/* <img id="homoY" src={homoY} alt="homolosine" /> */}
        {/* <img id="homoC" src={homoC} alt="homolosine" /> */}
      </div>
    </>
  )
}