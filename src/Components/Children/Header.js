import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/Header.css";


const Header = () => {
  return (
    <header>
      <nav id="navigation">
        <div id="logoNav"></div>
        <div id="websiteName">
          <h1>
            <NavLink to={"/"}>Viddev</NavLink>
          </h1>
        </div>
        <div id="linksNav">
          <ul>
            <li>
              <NavLink to={"/tvshows"}>
                TV Shows
              </NavLink>
            </li>
            <li>
              <NavLink to={"/movies"}>
                Movie
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to={"/login"}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to={"/registrer"}>
                Registrer
                </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
