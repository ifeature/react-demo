const mockApiData = [
  {
    id: 1,
    name: 'Enter Sandman'
  },
  {
    id: 2,
    name: 'Welcome Home'
  },
  {
    id: 3,
    name: 'Master of Puppets'
  },
  {
    id: 4,
    name: 'Fade to Black'
  },
  {
    id: 5,
    name: 'Nothing Else Matters'
  }
];

const fetchData = () => {
  return new Promise((resolve, reject) => {
    const isSuccess = Boolean(Math.round(Math.random() * 2 - 0.5));
    setTimeout(() => {
      if (isSuccess) {
        resolve(mockApiData);
      } else {
        reject('No data found');
      }
    }, 2000);
  });
};

export const getTracks = () => dispatch => {
  fetchData()
    .then(data => {
      dispatch({type: 'FETCH_TRACKS_SUCCESS', payload: data});
    })
    .catch(e => {
      dispatch({type: 'FETCH_TRACKS_ERROR', payload: e});
    });
};