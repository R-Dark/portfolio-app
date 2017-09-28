import React, { Component } from "react";
import Helmet from "react-helmet";

class Contacts extends Component {
  render() {
    return (
      <div className="page-div">
        <Helmet>
          <title>Contacts</title>
        </Helmet>
        <h2>This is the future contacts page</h2>
      </div>
    );
  }
}

export default Contacts;
