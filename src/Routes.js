import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";
import { Gallery } from "./Pages/Gallery";
import { Location } from "./Pages/Location";
import { About } from "./Pages/About";
import { Rooms } from "./Pages/Rooms";

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
        <Route path="/rooms" component={Rooms} />
      </span>
    );
  }
}
export default Routes;
