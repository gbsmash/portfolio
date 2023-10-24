import React, { useState } from "react";
import SunIcon from "../../assets/icons/SunIcon";
import { NavLink } from "react-router-dom";
import MenuIcon from "../../assets/icons/MenuIcon";
import XIcon from "../../assets/icons/XIcon";

function Navbar() {
  const navbarElements = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Portfolio",
      link: "/portfolio",
    }
  ];

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prevState) => { return (!prevState)});
    console.log(menuVisible);
  }

  return (
    <nav>
      <div className="nav--brand">
        <SunIcon />
      </div>
      <button onClick={toggleMenu}>{menuVisible ? <XIcon /> : <MenuIcon/>}</button>
      <div className={`nav--links ${menuVisible ? "menu" : ""}`}>
        {navbarElements.map(({ name, link, id }) => {
          return (
            <NavLink to={link} key={id}>
              {name}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
