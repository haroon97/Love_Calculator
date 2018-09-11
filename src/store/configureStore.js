import { createStore, applyMiddleware, combineReducers } from 'redux';
import nasaImage from '../reducers/nasaImage';
import spaceStation from '../reducers/spaceStation';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({
    nasaPic: nasaImage,
    iss: spaceStation
  }),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

export default store;