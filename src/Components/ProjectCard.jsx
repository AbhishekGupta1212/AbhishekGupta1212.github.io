import Carousel from 'nuka-carousel';
import '../Styles/ProjectCard.css'


const ProjectCard = ({ arr }) => {
  let defaultControlsConfig = {
    nextButtonText: "nextf",
    prevButtonText: "d",
    pagingDotsContainerClassName: "con",
    nextButtonClassName: "next",
    prevButtonClassName: "next",
    pagingDotsClassName: "con",
    speed: 20,
  };
  return (
    <>
      {arr.map((el) => (
        <div className='project-card'>
          <Carousel
            defaultControlsConfig={defaultControlsConfig}
            autoplay={true}
            id="carousel"
            slidesToShow={1}
            wrapAround={true}
          >
            {el.imgarr.map((el) => (
              <div id="webimg" key={el.img}>
              
                <img style={{ borderRadius: "1rem" }} src={el.img} alt="" />
              </div>
            ))}
          </Carousel>
          <div id='project-details'>
            <h1 className='project-title' style={{color:"black"}}>
              {el.title}{" "}
            </h1>
            <div className='project-description'>
              <h3>{el.des}</h3>
            </div>
            <div id="techstack">
              <h2>
                {/* {" "}
                <span style={{ color: "var(--color-bg)" }}>
                  Tech Stack{" ->"}
                </span>{" "}
                {el.techstack} */}
                <div className='project-tech-stack'>
                  {el.techstack.map((el) => (
                    <div key={el.name}>
                      <img width={30} src={el.src} alt="" />
                  <p id="para">{el.name}</p>
                    </div>
                  ))}
                </div>
              </h2>
            </div>

            <div>
              <a target="blank" href={el.github} style={{marginRight:"50px"}}>
                <button className='project-github-link'>
                  <i class="fa-brands fa-github"></i>
                </button>
              </a>
              <a target="blank" href={el.live}>
                <button className='project-deployed-link'>
                  {""}
                  <i class="fa-solid fa-eye"></i>
                  {"   "}
                </button>
              </a>
              {/* <a target={"blank"} href={el.dplink}><button>
                <i class="fa-solid fa-video"></i>
              </button></a> */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;