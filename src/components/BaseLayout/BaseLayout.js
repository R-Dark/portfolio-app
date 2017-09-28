import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

class BaseLayout extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div className="container">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default BaseLayout;
