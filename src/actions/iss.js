import store from '../store/configureStore';

export const locationFetching = () => {
  return {
    type: 'LOCATION_FETCHING'
  };
};

export const locationFetched = (data) => {
  return {
    type: 'LOCATION_FETCHED',
    data
  };
};

export const locationError = () => {
  return {
    type: 'LOCATION_ERROR'
  };
};

export const thunkActionCreatorLocation = () => {
  store.dispatch(locationFetching());
  return function(dispatch, getState) {
    fetch('http://api.open-notify.org/iss-now.json')
    .then((resp) => resp.json())
    .then((data) => dispatch(locationFetched(data)))
    .catch((err) => dispatch(locationError()))
  };
};