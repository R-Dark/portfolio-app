import React, { Component } from "react";
import Helmet from "react-helmet";

class Portfolio extends Component {
  render() {
    return (
      <div className="page-div">
        <Helmet>
          <title>Portfolio</title>
        </Helmet>
        <h2>This is the future portfolio page</h2>
      </div>
    );
  }
}

export default Portfolio;
