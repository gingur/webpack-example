import React from "react";
import ReactDOM from "react-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import routes from "./constants/routes";

const Application = function () {
  return (
    <div>
      <Nav route="about" routes={ routes }/>
      <About/>
    </div>
  )
};

ReactDOM.render(<Application/>, document.getElementById('app'));