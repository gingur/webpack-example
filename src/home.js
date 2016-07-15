import React from "react";
import ReactDOM from "react-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import routes from "./constants/routes";

const Application = function () {
  return (
    <div>
      <Nav route="home" routes={ routes }/>
      <Home/>
    </div>
  )
};

ReactDOM.render(<Application/>, document.getElementById('app'));