import React, { Component } from "react";
import { Link, BrowserRouter, Route } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 className="header-title">My Portfolio</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
