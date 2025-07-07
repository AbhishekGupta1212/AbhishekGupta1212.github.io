import React from "react";

import TopNavbar from "./Navbar";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Contact from './ContactMe'
import Projects from "./Projects";
import TopNav from "./TopNav";
const MainPage = () => {
  return (
    <>
      <TopNavbar />
      <TopNav/>
      <Home />
     <AboutMe/>
     <Skills/>
     <Projects/>
      <Contact/>
    </>
  );
};

export default MainPage;