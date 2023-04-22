import React from "react";

import "../Styles/AboutMe.css"
const AboutMe = () => {
 
  return (
    <section id="about">
      <div
        id="tech"
      
      >
        <h1 style={{ color: "var(--color-second)" ,fontSize:"58px"}}>About Me </h1>
   
      </div>

      <div id="aboutdiv" >
        <div>
<h2 style={{wordSpacing:"10px"}}>Hey Everyone, I'm Abhishek Gupta from Lucknow, Uttar Pradesh. I am a passionate, team-player, self-aspired, and adaptable individual with a problem-solving mindset who is eager to learn about new technologies and is proficient in HTML, JavaScript, CSS, React-Redux, MongoDB, and NodeJS. I've completed various projects involving the development of web apps, and I'm always looking for ways to expand my abilities and contribute to the growth of the tech sector.</h2>
        </div>
        <div  >
          <img
            src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=996&t=st=1682182357~exp=1682182957~hmac=28e8729607232fa29b1832dff94f48a923e2590b868b47428118ddbd00c61b01"
            alt="" style={{width:"80%"}}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;