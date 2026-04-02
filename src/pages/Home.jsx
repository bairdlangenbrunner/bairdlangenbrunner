import React, { useEffect } from "react";
import Homolosines from "../components/Homolosines";

function Home() {
  useEffect(() => { document.title = "Baird Langenbrunner"; }, []);
  return (
    <>
      <h1 className="sr-only">Baird Langenbrunner</h1>
      <Homolosines />
    </>
  );
}

export default Home;
