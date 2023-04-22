import React, { useEffect } from "react";
import "../Styles/Home.css"
import myResume from "../Resume/Abhishek-Gupta-Resume.pdf";

import { Typewriter } from "react-simple-typewriter";

import abhi_img from "../Components/Images/AbhishekGupta.png";

import Aos from "aos";

const handleResumeShow = () => {
  window.open(
    `https://drive.google.com/file/d/1Z35YiKRLf9n2c8L9O86qlciNA_iGb89p/view?usp=share_link`
  );
};
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id="home" style={{marginTop:"30px"}}>
      <div id="profile">
        {/* image */}
        <img src={abhi_img} alt="" style={{width:"50%"}}/>
      </div>
      <div id="abhi">
        <h1>
          {" "}
          Hello{" "}
          <img
            width={35}
            src="https://em-content.zobj.net/thumbs/160/apple/325/waving-hand_1f44b.png"
            alt=""
          />{" "}
          My Name is{" "}
        </h1>
        <h1 id="name">Abhishek Gupta</h1>
        <h1 id="type">
          <Typewriter
            deleteSpeed={90}
            typeSpeed={80}
            delaySpeed={250}
            words={[
              "Full Stack Web Developer",
              "Problem Solver",
              "Team Player"
              
            ]}
            loop
            cursor
            cursorBlinking
            cursorStyle="|"
          />
        </h1>

        <span onClick={handleResumeShow}>
          <a href={myResume} download>
            <button
              id="resume"
              style={{
                borderRadius: "1rem",
                backgroundColor:"#F2F5F5",
                padding: "15px 20px 15px 20px",
              }}
            >
              Resume
            </button>
          </a>
        </span>

        <div id="homesocial">
          <a target="blank" href="https://github.com/AbhishekGupta1212">
            {" "}
            <i class="fa-brands fa-github"></i>
          </a>

          <a
            target="blank"
            href="https://www.linkedin.com/in/abhishek-gupta-13883623a/"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;