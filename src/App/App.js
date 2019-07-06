import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "../Routes";
import { Menu } from "../Components/Menu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu title={"Harbour Hostel Tallinn"}>
          <Routes />
        </Menu>
      </BrowserRouter>
    </div>
  );
}

export default App;
