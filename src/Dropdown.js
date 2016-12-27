import React, { Component } from 'react';

class Dropdown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    };
  }

  toggleDropdown() {
    this.setState({
      isOpened: !this.state.isOpened
    });
  }

  render() {
    const dropdownText = this.state.isOpened ? <div>Dropdown text</div> : '';

    return (
      <div onClick={this.toggleDropdown.bind(this)}>
        Dropdown
        {dropdownText}
      </div>
    );
  }

}

export default Dropdown;