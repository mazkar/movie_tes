export const getAllMovie = (payload) => {
  return {
    type: "GET_ALL_MOVIE",
    payload,
  };
};

export const setAllMovie = (payload) => {
  return {
    type: "SET_ALL_MOVIE",
    payload,
  };
};

export const getId = (payload) => {
  return {
    type: "GET_ID",
    payload,
  };
};

export const getMovieDetail = (payload) => {
  return {
    type: "GET_MOVIE_DETAIL",
    payload,
  };
};

export const setMovieDetail = (payload) => {
  return {
    type: "SET_MOVIE_DETAIL",
    payload,
  };
};

export const setPage = (payload) => {
  return {
    type: "SET_PAGE",
    payload,
  };
};

export const setPageDefault = (payload) => {
  return {
    type: "SET_PAGE_DEFAULT",
    payload,
  };
};

export const setTitle = (payload) => {
  return {
    type: "SET_TITLE",
    payload,
  };
};

export const setLoading = (payload) => {
  return {
    type: "SET_LOADING",
    payload,
  };
};
