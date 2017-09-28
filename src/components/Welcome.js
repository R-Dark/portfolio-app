import React, { Component } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

class Welcome extends Component {
  render() {
    return (
      <div className="page-div">
        <Helmet>
          <title>Home Page</title>
        </Helmet>
        <h1>Welcome to My Portfolio.</h1>
        <div className="button-div">
          <Link to="/portfolio">
            <button
              id="button"
              type="button"
              className="btn btn-primary btn-lg"
            >
              Check Out My Work!
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Welcome;
