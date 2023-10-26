import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SunIcon from '../../assets/icons/SunIcon'
import links from "../../assets/side_links"

function Footer() {

  const [copied, setCopied] = useState(false);
  const {pathname} = useLocation();

  const copyToClipboard = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(()=>{
      setCopied(false);
    },2500);
  }

  const linkToAbout = () => {
    if(pathname === "/about") window.scrollTo(0, 0);
  }

  return (
    <footer>
        <div className="footer-column">
            <h3>Navigation</h3>
            <Link to="about" onClick={linkToAbout()}>Education</Link>
            <Link to="portfolio">Projects</Link>
            <Link to="about" onClick={linkToAbout()}>Skills</Link>
        </div>
        <div className="footer-column">
            <h3>Contacts</h3>
            <Link to={links.github}>Github</Link>
            <Link to={links.linkedin}>LinkedIn</Link>
            <button onClick={()=>{copyToClipboard(links.email)}} className={copied ? "copied" : ""}>E-mail</button>
        </div>
        <div className="footer-column">
          <SunIcon />
          <p>All illustrations from <Link to="https://icons8.com/" className='reference-link'>Icons8</Link></p>
          <p>All icons from <Link to="https://fontawesome.com/icons" className='reference-link'>Font Awesome</Link></p>
        </div>
    </footer>
  )
}

export default Footer