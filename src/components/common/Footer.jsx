import React from 'react'
import { Link } from 'react-router-dom'
import SunIcon from '../../assets/icons/SunIcon'

function Footer() {

  return (
    <footer>
        <div className="footer-column">
            <h3>Navigation</h3>
            <p>Education</p>
            <p>Projects</p>
            <p>Skills</p>
        </div>
        <div className="footer-column">
            <h3>Contacts</h3>
            <p>Github</p>
            <p>Linked In</p>
            <p>E-mail</p>
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