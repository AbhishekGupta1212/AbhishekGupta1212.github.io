import React, { useEffect } from "react";
import "../Styles/Home.css"
import "../Styles/darkmode.css"
import myResume from "../Resume/Abhishek-Gupta-Resume.pdf";

import { Typewriter } from "react-simple-typewriter";

import abhi_img from "../Components/Images/AbhishekGupta.png";

import Aos from "aos";

const handleResumeShow = () => {
  window.open(
    `https://1drv.ms/b/c/fc7030512fe4f2df/Ed_y5C9RMHAggPxMcB8AAAAB3sNbXVBiqrn68XT07C2dPQ?e=7NycVL`,'_blank'
  );
};
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id="home" style={{marginTop:"30px"}}>
      <div id="profile" >
        {/* image */}
        <img src={abhi_img} className="home-img" alt="" style={{width:"50%",objectFit:"cover",borderRadius:"230px"}}/>
        
      </div>
      <div id="abhi">
        <h1>
          {" "}
          Hello{" "}
          <img
            width={35}
            src="https://em-content.zobj.net/source/microsoft-teams/337/waving-hand_medium-light-skin-tone_1f44b-1f3fc_1f3fc.png"
            alt=""
          />{" "}
          My Name is{" "}
        </h1>
        <h1 id="user-detail-name">Abhishek Gupta</h1>
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

        <span onClick={handleResumeShow} id="resume-button-2">
          <a href={myResume} download='Abhishek-Gupta-Resume' id="resume-link-2"
          >
            <button
            id="btnResume"
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