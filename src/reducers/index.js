import { combineReducers } from 'redux';

import tracks from './tracks';
import playlists from './playlists';
import filterTracks from './filterTracks';
import errors from './errors';

export default combineReducers({
  tracks,
  playlists,
  filterTracks,
  errors
});