import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function About() {
  return (
    <>
    <section className="page-container">
      <Header />
      <div className="title-div">
        <h1 className="title-away">about</h1>
      </div>

      <section className="text-div">
        <p>Hi there. I'm a climate scientist working in energy transition research at <a href="https://globalenergymonitor.org/">Global Energy Monitor</a>, where I've managed <a href="https://globalenergymonitor.org/projects/global-oil-infrastructure-tracker/"oil>oil</a> and <a href="https://globalenergymonitor.org/projects/global-gas-infrastructure-tracker/">gas</a> infrastructure databases since I joined in 2021.</p>
        <p>I've spent a lot of my career using Python and matplotlib to wrangle and visualize data. I'm interested in maps and design, and weather and climate, and I've been teaching myself how to make things online lately. I believe very strongly in open-source and creative commons stuff.</p>
        <p>I studied geophysics in college and then did graduate work in atmospheric and oceanic science. After about a decade in academia, I shifted to work as an academic editor at <a href="https://www.nature.com/nclimate/">Nature Climate Change</a>, where I was before I began my current role.</p>
        <p><strong>contact me</strong></p>
        <p>My email address is my first and last name smushed together, no caps or punctuation, at gmail.</p>
        <p>I'm <a href="https://twitter.com/heyitsbaird">@heyitsbaird</a> on X.</p>
      </section>

      <Footer />
    </section>
    </>
  )
}

export default About