import React, { Component } from "react";
import logo from "../logo.svg";
import "../styles/App.css";
import About from "./About";
import Image from "./Welcome";
import Header from "./BaseLayout/Header";
import Portfolio from "./Portfolio";

import BaseLayout from "./BaseLayout/BaseLayout";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <BaseLayout>
            <div>
              <Route path="/" exact component={Image} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
            </div>
          </BaseLayout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
