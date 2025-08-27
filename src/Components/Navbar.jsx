
import "../Styles/Navbar.css";
import "../Styles/darkmode.css"
import React, { useEffect, useState } from "react";
import myResume from '../Resume/Abhishek-Gupta-Resume.pdf'
import Drawer1 from "./Drawer1";

const TopNavbar = () => {
  const handleResumeShow=()=>{
  window.open(`https://1drv.ms/b/c/fc7030512fe4f2df/Ed_y5C9RMHAggPxMcB8AAAAB3sNbXVBiqrn68XT07C2dPQ?e=7NycVL`)
}
  const [current, setCurrent] = useState("#home");
const [darkMode,setdarkMode] = useState(false)
 
useEffect(()=>{
  if(darkMode){
    document.body.classList.add('dark')
  }else{
    document.body.classList.remove('dark')
  }
},[darkMode])
  return (
    <div id="nav-menu">
      <div style={{height:"10vh"}} id="topnav">
        <a  href="https://abhishekgupta1212.github.io/">
          <div id="logo"  style={{ marginLeft: "150px", align: "center", padding: "4px" }}>
          <img  width={"250px"} src='https://i.postimg.cc/T1VrKN6b/favicon-removebg-preview.png' alt="" />
        </div></a>
        <div id="navel" >
          <div onClick={() => [setCurrent("#home"),window.location.href="#home"]}>
            {" "}
            <a href="#home" className="nav-link home" >
              <h4 className={current === "#home" ? "activemain" : null}>
                Home
              </h4>
            </a>
          </div>
          <div onClick={() => [setCurrent("#about"),window.location.href="#about"]}>
            <a href="#about" className="nav-link about">
              <h4 className={current === "#about" ? "activemain" : null}>
                About
              </h4>
            </a>{" "}
          </div>
          <div onClick={() => [setCurrent("#skills"),window.location.href="#skills"]}>
            <a href="#skills" className="nav-link skills">
              <h4 className={current === "#skills" ? "activemain" : null}>
                Skills
              </h4>
            </a>{" "}
          </div>
          <div onClick={() => [setCurrent("#projects"),window.location.href="#projects"]}>
            <a href="#projects" className="nav-link projects">
              <h4 className={current === "#projects" ? "activemain" : null}>
                Projects
              </h4>
            </a>{" "}
          </div>
          <div onClick={() => [setCurrent("#contact"),window.location.href="#contact"]}>
            <a href="#contact" className="nav-link contact">
              <h4 className={current === "#contact" ? "activemain" : null}>
                Contact
              </h4>
            </a>{" "}
          </div>
          <div onClick={() => setCurrent("#resume")} id="resume-button-1" >
            <span onClick={handleResumeShow} >
            <a  href={myResume} download='Abhishek-Gupta-Resume' className="nav-link resume" id="resume-link-1">
              <h4  className={current === "#resume" ? "activemain" : null}>
                Resume
              </h4>                                                                       
            </a></span>{" "}
          </div>
         <div>
         <input type="checkbox" class="l" onChange={()=>setdarkMode(!darkMode)}/>
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


