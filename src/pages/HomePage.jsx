import React, {useState} from 'react'
import Slider from '../components/home/Slider'
import { Link } from 'react-router-dom'
import GithubIcon from '../assets/icons/GithubIcon'
import Arrows from '../assets/icons/Arrows'
import projects from '../assets/projects'

function HomePage() {

  const [animatedArrows, setAnimatedArrows] = useState(false);

  return (
    <div className="home-page">
        <section className='home--section-slider'>
          <Slider />
        </section>

        <section className='home--section-projects'>
          <div className="projects-section-wrapper">
          <h1>Projects</h1>
          <div className="projects-wrapper">
            {projects.map((project)=> {
              return <div className={`home--project-container`} key={project.id}>
                      <img src={project.img}></img>
                      <p>{project.description}</p>
                      {project.link ? <Link to={project.link}>{project.link}</Link> : <></>}
                      <Link to={project.github}><GithubIcon/>Check Out on Github</Link>
                    </div>
            })}
          </div>

          <div className="projects-section-button-wrapper">
            <Link to={"/portfolio"} onMouseOver={()=>{setAnimatedArrows(true)}}  onAnimationEnd={()=>{setAnimatedArrows(false)}}>
              <Arrows arrowNum="arrow-1" animate={animatedArrows}/>
              <Arrows arrowNum="arrow-2" animate={animatedArrows}/>
              <Arrows arrowNum="arrow-3" animate={animatedArrows}/>
            </Link>
          </div>

          </div>
        </section>

    </div>
  )
}

export default HomePage