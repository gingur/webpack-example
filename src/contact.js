import React from "react";
import ReactDOM from "react-dom";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import routes from "./constants/routes";

const Application = function () {
  return (
    <div>
      <Nav route="contact" routes={ routes }/>
      <Contact/>
    </div>
  )
};

ReactDOM.render(<Application/>, document.getElementById('app'));