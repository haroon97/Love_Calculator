// INTERNATIONAL SPACE STATION REDUCER

const initialState = {
  location: {},
  peopleInSpace: {},
  isFetching: false,
  isFetched: false,
  isError: false
};

const spaceStation = (state = initialState, action) => {
  switch (action.type) {
    case 'LOCATION_FETCHING':
      return {
        ...state,
        peopleInSpace: {},
        isFetching: true,
        isFetched: false,
        isError: false,
        location: {}
      }
    case 'LOCATION_FETCHED':
      return {
        ...state,
        peopleInSpace: {},
        location: action.data,
        isFetched: true,
        isFetching: false,
        isError: false
      } 
    case 'LOCATION_ERROR':
      return {
        ...state,
        peopleInSpace: {},
        Location: {},
        isFetched: false,
        isFetching: false,
        isError: true
      }
    default:
      return state; 
  };
};

export default spaceStation;