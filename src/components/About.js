import React, { Component } from "react";
import Helmet from "react-helmet";

class About extends Component {
  render() {
    return (
      <div className="page-div">
        <Helmet>
          <title>About</title>
        </Helmet>
        <h1>Future About Page</h1>
      </div>
    );
  }
}

export default About;
