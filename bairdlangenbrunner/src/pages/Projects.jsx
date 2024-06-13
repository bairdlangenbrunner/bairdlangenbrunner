import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <>
    <div className="page-outline-div">

      <Header />
      <div className="title-section">
        <h1 className="title-away">projects</h1>
      </div>

      <article>
        <p>
          <ul>
          <li>You can find work-related stuff, and some personal projects, on my <Link to="https://github.com/bairdlangenbrunner">GitHub</Link></li>
          <li>You'll see my academic work on my <Link to="https://scholar.google.com/citations?user=QWDQ5fIAAAAJ">Google Scholar</Link> page</li>
          <li className="hidden">I've started a blog called <Link to="https://bairdlangenbrunner.com/isthisinteresting">is this interesting</Link> that I'm updating these days</li>
          </ul>
        </p>
      </article>

      <Footer />

    </div>
    </>
  )
}


export default Projects