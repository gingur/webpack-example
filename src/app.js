import React from "react";
import ReactDOM from "react-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import routes from "./constants/routes";

class Application extends React.Component {

  constructor () {
    super(...arguments);
    this.handleNewHash = this.handleNewHash.bind(this);
    this.state = {
      route: this.getHash()
    }
  }

  getHash () {
    const hash = window.location.hash.substr(1);
    return routes.hasOwnProperty(hash) ? hash : 'home';
  }

  handleNewHash () {
    this.setState({
      route: this.getHash()
    });
  }

  componentDidMount () {
    window.addEventListener('hashchange', this.handleNewHash, false);
  }

  componentWillUnmount () {
    window.removeEventListener('hashchange', this.handleNewHash);
  }

  render () {
    const { route } = this.state;
    const { Component } = routes[route];
    return (
      <div>
        <Nav route={ route } routes={ routes }/>
        <Component/>
      </div>
    )
  }
}

ReactDOM.render(<Application/>, document.getElementById('app'));