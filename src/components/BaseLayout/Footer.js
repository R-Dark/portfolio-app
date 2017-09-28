import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer-div">
        <footer>
          <nav>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contacts">Contact</NavLink>
            <NavLink to="/references">References</NavLink>
          </nav>
        </footer>
      </div>
    );
  }
}

export default Footer;
