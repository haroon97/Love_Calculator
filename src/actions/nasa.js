// NASA IMAGE ACTION GENERATOR

import store from '../store/configureStore';

export const fetching = () => {
  return {
    type: 'FETCHING'
  };
};

export const fetched = (data) => {
  return {
    type: 'FETCHED',
    data
  };
};

export const error = () => {
  return {
    type: 'ERROR'
  };
};

export const thunkActionCreator = () => {
  store.dispatch(fetching());
  return function(dispatch, getState) {
    fetch('https://api.nasa.gov/planetary/apod?api_key=ve0qMHRNQKDAQxezVjKWwltuWK3gh06tfg1fSHJH')
    .then((resp) => resp.json())
    .then((data) => dispatch(fetched(data)))
    .catch((err) => dispatch(error()))
  };
};



