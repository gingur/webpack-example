import React, { PropTypes } from "react";

function Nav ({ route, routes }) {
  return (
    <nav>
      <ul>
        { Object.keys(routes).map(r => (
          <li key={ r }>
            <a href={ routes[r].href } className={ r === route ? 'active' : '' }>{ routes[r].title }</a>
          </li>
        )) }
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  route: PropTypes.string,
  routes: PropTypes.object
};

export default Nav;