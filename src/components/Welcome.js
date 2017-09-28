import React, { Component } from "react";
import { Link } from "react-router-dom";

class Welcome extends Component {
  render() {
    return (
      <div className="page-div">
        <h1>Welcome to My Portfolio.</h1>
        <div className="button-div">
          <Link to="/portfolio">
            <button type="button" class="btn btn-primary btn-lg">
              Check Me Out!
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Welcome;
