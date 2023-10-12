import React from "react";
import SunIcon from "../../assets/icons/SunIcon";
import { NavLink } from "react-router-dom";

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
    },
    {
      id: 4,
      name: "Contact",
      link: "contact",
    },
  ];

  return (
    <nav>
      <div className="nav--brand">
        <SunIcon />
      </div>
      <div className="nav--links">
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
