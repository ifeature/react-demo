import React, {Component} from 'react';
import {Link} from 'react-router';

class Menu extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
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