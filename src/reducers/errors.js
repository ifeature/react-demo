const initialState = '';

export default function errors(state = initialState, action) {
  if (action.type === 'FETCH_TRACKS_ERROR') {
    return action.payload;
  }

  return state;
}