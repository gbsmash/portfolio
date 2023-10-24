import React, {useState, useEffect} from 'react'
import { Link, RouterProvider } from 'react-router-dom'
import RightArrow from "../../assets/icons/RightArrow"
import LeftArrow from "../../assets/icons/LeftArrow"
import GithubIcon from "../../assets/icons/GithubIcon"
import LinkedinIcon from "../../assets/icons/LinkedinIcon"
import MailIcon from "../../assets/icons/MailIcon"
import EduImg from "../../assets/images/education.png"
import SkillImg from "../../assets/images/skill.png"
import AchievementImg from "../../assets/images/achievement.png"
import links from '../../assets/side_links'



function Slider() {

  const slides = [
    {
      id: 0,
      element: <Main />
    },
    {
      id: 1,
      element: <About />
    },
    {
      id: 2,
      element: <Contact />
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  
  const toNextSlide = () => {
    setCurrentSlide((prevSlide) => {
      return prevSlide === slides.length - 1 ? 0 : prevSlide + 1;
    })
  }

  const toPreviousSlide = () => {
    setCurrentSlide((prevSlide) => {
      return prevSlide === 0 ? slides.length - 1 : prevSlide - 1;
    })
  }


  return (
    <div className={`home--section-wrapper ${currentSlide === 1 ? ' about' : ''}`}>
        <button className='home--slider-button' onClick={toPreviousSlide}><LeftArrow/></button>
        {slides[currentSlide].element}
        <button className='home--slider-button' onClick={toNextSlide}><RightArrow/></button>
    </div>
  )
}


const Main = () => {
  return <div className='home--slider-main'>
      <div className="main-frame"></div>
      <div className="main-info">
        <h1>Hi, I am Shams</h1>
        <h3> Software Developer</h3>
      </div>
    </div>
}


const About = () => {
  return <div className='home--slider-about'>
    <div className="about-container education">
      <img src={EduImg}/>
      <p>A quick review of my former and present academic life</p>
      <Link to="/about">Education</Link>
    </div>
    <div className="about-container achievements">
      <img src={AchievementImg}/>
      <p>Take a glance at my numerous (not really) accomplishments</p>
      <Link to="/about">Achievements</Link>
    </div>
    <div className="about-container skills">
      <img src={SkillImg}/>
      <p>The most honest description of my talents</p>
      <Link  to="/about">Skills</Link>
    </div>
  </div>
}


const Contact = () => {

  const [copied, setCopied] = useState(false);

  const copyToClipboard = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(()=>{
      setCopied(false);
    },2500);
  }

  return <div className='home--slider-contact'>
      <h1>Contact</h1>
      <div className="contact-links">
        <p className='p-github'><GithubIcon /> <Link to={links.github}>Github</Link></p>
        <p className='p-linkedin'><LinkedinIcon /> <Link to={links.linkedin}>LinkedIn</Link></p>
        <p className='p-mail'><MailIcon /> <button onClick={()=>{copyToClipboard(links.email)}} className={copied ? "copied" : ""}>E-mail</button></p>
      </div>
    </div>
}

export default Slider

