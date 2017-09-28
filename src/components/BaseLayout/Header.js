import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 className="header-title">ROB DARK</h1>
          <nav>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
            <NavLink to="/references">References</NavLink>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
