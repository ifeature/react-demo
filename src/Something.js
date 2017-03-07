import React, { Component } from 'react';
import Menu from './Menu';
import Stateless from './Stateless';

class Something extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      modelValue: '',
      viewValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  static contextTypes = {
    appValue: React.PropTypes.string
  };
  handleChange(event) {
    const newValue = event.target.value;

    this.setState({
      modelValue:newValue,
      viewValue: newValue.toUpperCase()
    })
  }
  render() {
    return (
      <div className="my-css-class">
        <div>Something</div>
        Model value: <input type="text" defaultValue="This is a default value" value={this.state.value} onChange={this.handleChange} />
        <br/>
        View value: {this.state.viewValue}
        <div>
          value from parent via context: {this.context.appValue}
        </div>
        <div className="stateless-block">
          <Stateless someProp={"Property from Something"} />
        </div>
      </div>
    );
  }
}

export default Something;