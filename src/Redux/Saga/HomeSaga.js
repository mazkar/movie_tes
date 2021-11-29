import axios from "axios";

import { put, takeLatest, select } from "redux-saga/effects";

//action
import { setAllMovie, setId, setMovieDetail, setLoading, setAllMovieReload } from "./../Action/HomeAction";

function* sagaGetAllMovie(action) {
  const SearchValue = yield select((state) => state.HomeReducer.search);
  const pageSize = yield select((state) => state.HomeReducer.page);
  try {
    const res = yield axios.get("http://www.omdbapi.com/", { params: { apikey: `715289b`, s: SearchValue, page: 1 } });
    console.log(res, "resultMovie");
    yield put(setAllMovie(res.data.Search));
  } catch (error) {
    console.log(error, "eroor get movie");
  }
}

function* sagaGetAllMovieReload(action) {
  const pageSize = yield select((state) => state.HomeReducer.page);
  const loading = yield select((state) => state.HomeReducer.isLoading);
  const SearchValue = yield select((state) => state.HomeReducer.search);
  try {
    const res = yield axios.get("http://www.omdbapi.com/", { params: { apikey: `715289b`, s: SearchValue, page: pageSize } });
    console.log(res, "resultMovie");
    yield put(setAllMovieReload(res.data.Search));
  } catch (error) {
    console.log(error, "eroor get movie");
    yield put(setLoading(false));
  }
}

function* sagaGetMovieDetail(action) {
  const Title = yield select((state) => state.HomeReducer.title.Title);
  try {
    const res = yield axios.get("http://www.omdbapi.com/", { params: { apikey: `715289b`, t: Title } });
    console.log(res, "resultMovie");
    yield put(setMovieDetail(res.data));
  } catch (error) {
    console.log(error, "eroor get movie");
  }
}

export function* SagaHomeWorker() {
  yield takeLatest("GET_ALL_MOVIE", sagaGetAllMovie);
  yield takeLatest("GET_MOVIE_DETAIL", sagaGetMovieDetail);
  yield takeLatest("GET_ALL_MOVIE_RELOAD", sagaGetAllMovieReload);
}
