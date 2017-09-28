import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <NavLink exact to="/">
            <h1 className="header-title">ROB DARK</h1>
          </NavLink>
          <nav>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contacts">Contact</NavLink>
            <NavLink to="/references">References</NavLink>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
