const initialState = [
  'My home playlist',
  'My work playlist'
];

export default function playLists(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PLAYLIST': {
      break;
    }
    case 'DELETE_PLAYLIST': {
      break;
    }
    default: {
      break;
    }
  }

  return state;
}