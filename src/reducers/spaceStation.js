// INTERNATIONAL SPACE STATION REDUCER

const initialState = {
  location: {},
  peopleInSpace: {},
  isFetching: false,
  isFetched: false,
  isError: false,
  isPeopleFetching: false,
  isPeopleFetched: false,
  isPeopleError: false
};

const spaceStation = (state = initialState, action) => {
  switch (action.type) {
    case 'LOCATION_FETCHING':
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        isError: false,
        location: {}
      }
    case 'LOCATION_FETCHED':
      return {
        ...state,
        location: action.data,
        isFetched: true,
        isFetching: false,
        isError: false
      } 
    case 'LOCATION_ERROR':
      return {
        ...state,
        location: {},
        isFetched: false,
        isFetching: false,
        isError: true
      }
    case 'PEOPLE_FETCHING':
      return {
        ...state,
        isPeopleFetching: true,
        isPeopleFetched: false,
        isPeopleError: false,
        peopleInSpace: {}
      }
    case 'PEOPLE_FETCHED':
      return {
        ...state,
        isPeopleFetching: false,
        isPeopleFetched: true,
        isPeopleError: false,
        peopleInSpace: action.data
      }
    case 'PEOPLE_ERROR':
      return {
        ...state,
        isPeopleFetching: false,
        isPeopleFetched: false,
        isPeopleError: true,
        peopleInSpace: {}
      }
    default:
      return state; 
  };
};

export default spaceStation;