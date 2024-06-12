import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function Projects() {
  return (
    <>
    <section className="page-container">
      <Header />
      <div className="title-div">
        <h1 className="title-away">projects</h1>
      </div>

      <section className="text-div">
          <ul>
          <li>You can find work-related stuff, and some personal projects, on my <a href="https://github.com/bairdlangenbrunner">GitHub</a></li>
          <li>You'll see my academic work on my <a href="https://scholar.google.com/citations?user=QWDQ5fIAAAAJ">Google Scholar</a> page</li>
          </ul>
      </section>

      <Footer />
    </section>
    </>
  )
}


export default Projects