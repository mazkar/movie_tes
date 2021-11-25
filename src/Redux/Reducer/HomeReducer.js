const initialState = {
  allMovie: [{}],
  movieDetail: [{}],
  title: {},
  page: 1,
  isError: false,
  isLoading: false,
};

export const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALL_MOVIE":
      return {
        ...state,
        allMovie: action.payload,
        isLoading: false,
      };
    case "GET_ALL_MOVIE":
      return {
        ...state,
        allMovie: action.payload,
        isLoading: true,
      };
    case "GET_TITLE":
      return {
        ...state,
        title: action.payload,
      };
    case "SET_MOVIE_DETAIL":
      return {
        ...state,
        movieDetail: action.payload,
      };

    case "SET_PAGE":
      return {
        ...state,
        page: action.payload + 1,
      };
    case "SET_PAGE_DEFAULT":
      return {
        ...state,
        page: 1,
      };
    case "SET_TITLE":
      return {
        ...state,
        title: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};
