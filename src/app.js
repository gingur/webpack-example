import React from "react";
import ReactDOM from "react-dom";
import Nav from "./components/Nav";
import Loading from "./components/Loading";
import routes from "./constants/routes";

class Application extends React.Component {

  constructor () {
    super(...arguments);
    this.handleNewHash = this.handleNewHash.bind(this);
    this.state = {
      route: this.getHash(),
      fallback: null
    }
  }

  getHash () {
    const hash = window.location.hash.substr(1);
    return routes.hasOwnProperty(hash) ? hash : 'home';
  }

  getRouteView () {
    const route = routes[this.state.route];
    if (route.Component) {
      return route.Component;
    }
    route.load(({ default: Component }) => {
      route.Component = Component;
      this.setState({
        fallback: Component
      });
    });
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
    const { route, fallback } = this.state;
    const view = this.getRouteView();
    const Component = view || fallback;
    return (
      <div>
        { !view && <Loading/> }
        <Nav route={ route } routes={ routes }/>
        { Component && <Component/> }
      </div>
    )
  }
}

ReactDOM.render(<Application/>, document.getElementById('app'));