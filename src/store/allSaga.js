import { all } from "redux-saga/effects";
import { SagaHomeWorker } from "../Redux/Saga/HomeSaga";

export function* allSaga() {
  yield all([SagaHomeWorker()]);
}
