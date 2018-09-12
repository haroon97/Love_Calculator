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

export const peopleFetching = () => {
  return {
    type: 'PEOPLE_FETCHING'
  };
};

export const peopleFetched = (data) => {
  return {
    type: 'PEOPLE_FETCHED',
    data
  };
};

export const peopleError = () => {
  return {
    type: 'PEOPLE_ERROR'
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

export const thunkActionCreatorPeople = () => {
  store.dispatch(peopleFetching());
  return function(dispatch, getState) {
    fetch('http://api.open-notify.org/astros.json')
    .then((resp) => resp.json())
    .then((data) => dispatch(peopleFetched(data)))
    .catch((err) => dispatch(peopleError()));
  };
};