const initialState = [];

export default function tracks(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TRACK': {
      state = [...state, action.payload];
      break;
    }
    case 'FETCH_TRACKS_SUCCESS': {
      return action.payload;
    }
    default: {
      break;
    }
  }

  return state;
}
