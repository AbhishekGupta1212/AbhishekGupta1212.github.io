import React from "react";


// import Navbar from "../Components/Navbar";
// import Home from "../Components/Home";
// import Skills from "../Components/Skills";
// import Projects from "./Projects";

// import About from "./About";
// import TopNavbar from "./TopNavbar";
// import Social from "./Social";
// import Contact from "./Contact";

import TopNavbar from "./Navbar";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
const MainPage = () => {
  return (
    <>
      <TopNavbar />
      <Home />
     <AboutMe/>
     <Skills/>
    </>
  );
};

export default MainPage;