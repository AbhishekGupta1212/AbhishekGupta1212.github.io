import { Flex } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from 'react-github-calendar';
import '../Styles/Projects.css'
import ProjectCard from "./ProjectCard";

import { dataarr,dataarr2,dataarr3,dataarr4} from "./AllProject";

const Projects = () => {
//   const [tech, setTech] = React.useState("all");
const allProjectsArr=[dataarr,dataarr2,dataarr3,dataarr4]

  return (
    <section id="projects">
        <div id="tech" margin={"auto"} justifyContent={"space-around"}>
            <h1 style={{color:"var(--color-second)"}}>Projects</h1>
        </div>
          <div id="cards">
<>
{allProjectsArr.map((el, index) => (
              <ProjectCard
                key={new Date().getMilliseconds() * Math.random() * 535533}
                arr={el}
              />
            ))}
</>
          </div>
          <div id="gitname" margin={"auto"} justifyContent={"space-around"}>
        <h2 >
          Github Contribution Calender{" "}
        </h2>
      </div>
          <div id="calendar" style={{marginTop:"5px"}}>
                <GitHubCalendar username="abhishekgupta1212" 
              blockSize={16}
              fontSize={14}
          colorScheme="dark"
          />
          </div>

          <div id="gitname" margin={"auto"} justifyContent={"space-around"}>
        <h2 >Github Stats </h2>
      </div>
<div id="gitstats">
          <div >
    <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com?user=abhishekgupta1212&theme=transparent"/>
      </div>
      <div >
        <img  id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=abhishekgupta1212&layout=compact&theme=transparent" alt="" />
      </div>
     <div >
<img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=abhishekgupta1212&show_icons=true&theme=transparent" alt="" />
     </div>
     <div id="Activitygraph">
<img src="https://github-readme-activity-graph.vercel.app/graph?username=AbhishekGupta1212&bg_color=f5f5f5&color=a1639d&line=d071ca&point=000000&area=true&hide_border=true)](https://github.com/ashutosh00710/github-readme-activity-graph" alt="" />
     </div>
</div>

    </section>
  );
};

export default Projects;