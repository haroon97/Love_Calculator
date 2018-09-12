// NASA ASTRONOMY PIC OF THE DAY REDUCER

const initState = {
  astronomyPicture: {},
  isError: false,
  isPicFetching: false,
  isPicFetched: false
}

const nasaImage = (state = initState, action) => {
  switch (action.type) {
    case 'FETCHING':
      return {
        ...state,
        isPicFetching: true,
        isError: false,
        isPicFetched: false
      }
    case 'FETCHED':
      return {
      ...state,
      isPicFetching: false,
      isPicFetched: true,
      isError: false,
      astronomyPicture: action.data
    }
  case 'ERROR':
    return {
      ...state,
      isPicFetched: false,
      isError: true,
      astronomyPicture: {},
      isPicFetching: false
    }
  default:
    return state;
  };
};

export default nasaImage;