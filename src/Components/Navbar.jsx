// import React from 'react'
// import { Navbar, Nav } from 'react-bootstrap';
// export const NavigationBar = () => {

//     return (
//         <Navbar bg="light" expand="lg" className="navbar-custom">
//           <Navbar.Brand href="#">Brand Name</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ml-auto">
//               <Nav.Link href="#">Home</Nav.Link>
//               <Nav.Link href="#">About</Nav.Link>
//               <Nav.Link href="#">Contact</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//       );
  
// }

import "../Styles/Navbar.css";

import React, { useState } from "react";
import Drawer1 from "./Drawer1";
import myResume from '../Resume/Abhishek-Gupta-Resume.pdf'

const TopNavbar = () => {
  const handleResumeShow=()=>{
  window.open(`https://drive.google.com/file/d/1Z35YiKRLf9n2c8L9O86qlciNA_iGb89p/view?usp=share_link`)
}
  const [current, setCurrent] = useState("#home");
  return (
    <div>
      <div style={{height:"10vh"}} id="topnav">
        <a  href="https://abhishekgupta1212.github.io/"><div  style={{ marginLeft: "40px", align: "center", padding: "4px" }}>
          <img width={"50px"} src='' alt="" />
        </div></a>
        <div id="navel">
          <div onClick={() => [setCurrent("#home"),window.location.href="#home"]}>
            {" "}
            <a href="#home">
              <h4 className={current === "#home" ? "activemain" : null}>
                Home
              </h4>
            </a>
          </div>
          <div onClick={() => [setCurrent("#about"),window.location.href="#about"]}>
            <a href="#about">
              <h4 className={current === "#about" ? "activemain" : null}>
                About
              </h4>
            </a>{" "}
          </div>
          <div onClick={() => [setCurrent("#skills"),window.location.href="#skills"]}>
            <a href="#skills">
              <h4 className={current === "#skills" ? "activemain" : null}>
                Skills
              </h4>
            </a>{" "}
          </div>
          <div onClick={() => [setCurrent("#projects"),window.location.href="#projects"]}>
            <a href="#projects">
              <h4 className={current === "#projects" ? "activemain" : null}>
                Projects
              </h4>
            </a>{" "}
          </div>
          <div onClick={() => [setCurrent("#contact"),window.location.href="#contact"]}>
            <a href="#contact">
              <h4 className={current === "#contact" ? "activemain" : null}>
                Contact
              </h4>
            </a>{" "}
          </div>
          <div onClick={() => setCurrent("#resume")}>
            <span onClick={handleResumeShow}>
            <a  href={myResume} download>
              <h4 id="resumenav" className={current === "#resume" ? "activemain" : null}>
                Resume
              </h4>                                                                       
            </a></span>{" "}
          </div>
         
        </div>
        <div id="sidebar">
        <Drawer1/>
          </div>
      </div>
    </div>
  );
};

export default TopNavbar;


