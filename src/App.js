import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { css } from 'aphrodite/no-important';
import styles from './AppStyles';

import { getTracks } from './actions/tracks';
import Something from './Something';

class App extends Component {

  getChildContext() {
    return { appValue: "Jonas" }
  }

  static childContextTypes = {
      appValue: React.PropTypes.string
  };

  componentDidMount() {
    console.log('findNode: ', findDOMNode(this));
  }

  addTrack() {
    const track = this.textInput.value;
    this.props.onAddTrack(track);
    this.textInput.value = '';
  }

  findTrack() {
    const track = this.searchInput.value;
    this.props.onFindTrack(track);
  }

  render() {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.square)}>
          <Something />
        </div>
        <div className="add-track">
          <input type="text" ref={(input) => this.textInput = input} />
          <button onClick={this.addTrack.bind(this)}>Add Track</button>
        </div>
        <div className="search-track">
          <input type="text" ref={(input) => this.searchInput = input} />
          <button onClick={this.findTrack.bind(this)}>Find Track</button>
        </div>
        <div className="get-track">
          <button onClick={this.props.onGetTracks}>Get tracks</button>
        </div>
        <ul>
          {
            this.props.errors
          }
          {
            this.props.tracks.map((track, index) => {
              return (
                <li key={track.id}>
                  {track.name}
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tracks: state.tracks.filter(track => track.name.includes(state.filterTracks)),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  onAddTrack: name => {
    const payload = {
      id: Date.now().toString(),
      name
    };

    dispatch({type: 'ADD_TRACK', payload})
  },
  onFindTrack: name => {
    dispatch({type: 'FIND_TRACK', payload: name});
  },
  onGetTracks: () => {
    dispatch(getTracks());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
