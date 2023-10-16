import React from 'react'
import projects from "../assets/projects"
import { Link } from 'react-router-dom'
import GithubIcon from '../assets/icons/GithubIcon'

function PortfolioPage() {
  
  return (
    <div className='portfolio-page'>
      <h1>It ain't much, but it's honest work</h1>
      {console.log(projects)}
      {projects.map((project)=>{
        return <div className={"portfolio--project-container flow-" + (project.id % 2)}>
          <img src={project.img}/>
          <div className="portfolio--project-container-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags-wrapper">
              {project.tags.map((tag)=>{
                return <span> {tag} </span>
              })}
            </div>
            <div className="portfolio--project-row-wrapper">
              <Link><GithubIcon/>Check Out on Github</Link>
            </div>
          </div>
          <div className="horizontal-line"></div>
        </div>
      })}

    </div>
  )
}

export default PortfolioPage