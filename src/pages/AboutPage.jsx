import React, {useState} from 'react'
import UfazImg from "../assets/images/ufaz.jpg"
import SchoolImg from "../assets/images/school.jpg"
import TrophyImg from "../assets/images/trophy.png"
import StarIcon from '../assets/icons/StarIcon'

function AboutPage() {

  const [activeSkill, setActiveSkill] = useState(0);

  const skills = [
    {
      id: 1,
      title: "HTML",
      level: 5
    },
    {
      id: 2,
      title: "CSS",
      level: 4
    },
    {
      id: 3,
      title: "JavaScript",
      level: 4
    },
    {
      id: 4,
      title: "ReactJS",
      level: 4
    },
    {
      id: 5,
      title: "Team Work",
      level: 5
    },
    {
      id: 6,
      title: "Creativity",
      level: 1
    },
    {
      id: 7,
      title: "Critical Thinking",
      level: 5
    }
  ]

  return (
    <div className='about-page'>

      <section className='about--section-education'>
        <h1>Education</h1>
        <div className="education-content-wrapper">
            <div className="overlap-image-wrapper">
              <img src={UfazImg} className='img-large'/>
              <img src={SchoolImg} className='img-small'/>
            </div>
            <ul>
              <li>
                <p><span>High School </span>- 2009-2020</p>
                <p>Educational Complex No 132-134</p>
              </li>
              <li>
                <p><span>Bachelor's Degree in Computer Science </span>- 2020-Present</p>
                <p>French-Azerbaijani University</p>
              </li>
            </ul>
        </div>
      </section>

      <section className='about--section-skills'>
        
        <div className="skills-wrapper">
          {skills.map((skill)=> {
            return <button 
              className={`skill-container type-${Math.floor(Math.random() * 3 + 1)} ${activeSkill === skill.id ? "active" : ""}`} 
              onClick={()=> { setActiveSkill(skill.id) }}
              key={skill.id}>{skill.title}
            </button>
          })}
          
        </div>
        <div className="skills-levels">
          <h1>Skills</h1>
          <div className="levels-wrapper">
            {[...Array(5).keys()].map((index)=>{
              return <div 
              className={`level type-${index+1} ${activeSkill !== 0 ? skills[activeSkill-1].level >= index+1 ? "active" : "" : ""}`} 
              key={index}>
              </div>
            })}
          </div>
        </div>
        
      </section>

      <section className='about--section-achievements'>
        <h1>Achievements</h1>
        <div className="achievements-content-wrapper">
          <div className="achievements-info-wrapper">
          <p><StarIcon/><span>3rd place at Pasha Insurance Hackathon</span></p>
          <p><StarIcon/><span>IELTS Exam Overall Score 7.5</span></p>
          <p><StarIcon/><span>636 points scored at State Examination Center (SEC) University Entrance Exams</span></p>
          <p><StarIcon/><span>Completing Summer School in Strasbourg, France</span></p>
          <p><StarIcon/><span>Graduating from secondary and high school with honors</span></p>
          </div>
          <img src={TrophyImg}/>
        </div>
      </section>
    </div>
  )
}

export default AboutPage