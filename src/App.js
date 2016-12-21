import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTracks } from './actions/tracks';

import './App.css';

class App extends Component {
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
      <div>
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

export default connect(
  state => ({
    tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
  }),
  dispatch => ({
    onAddTrack: (name) => {
      const payload = {
        id: Date.now().toString(),
        name
      };

      dispatch({type: 'ADD_TRACK', payload})
    },
    onFindTrack: (name) => {
      dispatch({type: 'FIND_TRACK', payload: name});
    },
    onGetTracks: () => {
      dispatch(getTracks());
    }
  })
)(App);
