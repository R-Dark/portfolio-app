import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer-div">
        <footer>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/about">About</Link>
          </nav>
        </footer>
      </div>
    );
  }
}

export default Footer;
