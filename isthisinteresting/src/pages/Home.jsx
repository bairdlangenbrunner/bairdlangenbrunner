import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Homolosine from "../components/Homolosine/Homolosine";
import HorizontalRule from "../components/HorizontalRule/HorizontalRule";
import FavoriteResources from "./FavoriteResources";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="body-div">
        <Header />
        <div className="main-div">
          {/* <Homolosine /> */}
          <article class="m-auto">
            <p>see my inaugural post <Link to="/posts/first-post">here</Link></p>
          </article>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
