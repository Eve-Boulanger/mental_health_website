import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {AiOutlineHome} from "react-icons/ai";
import "./Styles/NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <AiOutlineHome className="fas fa-code" />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/resources"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Resources
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/activities"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Activities
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/support"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Support
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;