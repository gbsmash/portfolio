import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SunIcon from '../../assets/icons/SunIcon'
import links from "../../assets/side_links"

function Footer() {

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(links.email);
    setCopied(true);
    setTimeout(()=>{
      setCopied(false);
    },2500);
  }

  return (
    <footer>
        <div className="footer-column">
            <h3>Navigation</h3>
            <Link to="about">Education</Link>
            <Link to="about">Projects</Link>
            <Link to="about">Skills</Link>
        </div>
        <div className="footer-column">
            <h3>Contacts</h3>
            <Link to={links.github}>Github</Link>
            <Link to={links.linkedin}>LinkedIn</Link>
            <button onClick={copyToClipboard} className={copied ? "copied" : ""}>E-mail</button>
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