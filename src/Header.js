import React, {Component, PropTypes} from 'react';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['news', 'development']),
    items: PropTypes.arrayOf(
      PropTypes.shape({
        link: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
      })
    )
  };

  static get defaultProps() {
    return {
      title: 'Header title'
    };
  }

  render() {
    const items = this.props.items.map((item, index) => {
      return (
        <a href={item.link} key={index}>{item.label}</a>
      );
    });

    return (
      <div>
        {this.props.title}
        <nav>
          {items}
        </nav>
      </div>
    );
  }
}

export default Header;