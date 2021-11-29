const initialState = {
  allMovie: [],
  movieDetail: [{}],
  title: {},
  page: 1,
  isError: false,
  isLoading: false,
  search: "",
};

export const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALL_MOVIE":
      return {
        ...state,
        allMovie: action.payload,
        isLoading: false,
      };
    case "SET_ALL_MOVIE_RELOAD":
      return {
        ...state,
        allMovie: [...state.allMovie, ...action.payload],
        isLoading: false,
      };
    case "RESET_ALL_MOVIE":
      return {
        ...state,
        allMovie: action.payload,
        page: 1,
        isLoading: false,
      };
    case "GET_ALL_MOVIE":
      return {
        ...state,

        isLoading: true,
      };
    case "GET_ALL_MOVIE_RELOAD":
      return {
        ...state,

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
        page: state.page + 1,
      };
    case "SET_PAGE_DEFAULT":
      return {
        ...state,
        page: action.payload,
      };
    case "SET_TITLE":
      return {
        ...state,
        title: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload,
      };
    case "RESET_SEARCH":
      return {
        ...state,
        search: "",
        allMovie: [],
      };

    default:
      return state;
  }
};
