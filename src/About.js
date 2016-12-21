import React, { Component } from 'react';
import { Link } from 'react-router';

import Menu from './Menu';

class About extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div>About page</div>
        <Link to={"/about/whatever"}>Whatever nested route</Link>

        <div className='something-container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default About;