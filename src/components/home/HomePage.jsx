import NavBar from "../NavBar";
import MainSlider from "./MainSlider";
import React from "react";

function HomePage(props) {
  return (
    <>
      <NavBar></NavBar>
      <MainSlider classname="mx-auto"></MainSlider>
    </>
  );
}

export default HomePage;
