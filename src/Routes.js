import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";
import { Gallery } from "./Pages/Gallery";
import { Location } from "./Pages/Location";
import { About } from "./Pages/About";

class Routes extends Component {
  render() {
    return (
      <span>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route path="/location" component={Location} />
      </span>
    );
  }
}
export default Routes;
