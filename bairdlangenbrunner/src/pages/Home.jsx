import React from 'react'
import Footer from '../components/Footer/Footer'
import Homolosines from '../components/Homolosines/Homolosines'
import Header from '../components/Header/Header'

function Home() {
  return (
    <>
    <section className="page-container">
      <Header />
      <div className="title-div">
        <h1 className="title-home">Baird Langenbrunner</h1>
      </div>
      <Homolosines />
      <Footer />
    </section>
    </>
  )
}

export default Home