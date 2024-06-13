import React from 'react'
import Footer from '../components/Footer/Footer'
import Homolosines from '../components/Homolosines/Homolosines'
import Header from '../components/Header/Header'

function Home() {
  return (
    <>
    <div className="page-outline-div">
      <div className="page-content-div">
      <Header />
      <section className="title-section">
        <h1 className="title-home">Baird Langenbrunner</h1>
      </section>
      <Homolosines />
      <Footer />
      </div>
    </div>
    </>
  )
}

export default Home