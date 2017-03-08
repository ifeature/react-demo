import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Menu extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <IndexLink to={"/"}>Home</IndexLink>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;