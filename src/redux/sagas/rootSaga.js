import { takeLatest } from "redux-saga/effects";
import { GET_SERIES } from "../ducks/series";
import { handleGetseries } from "./handlers/series";
import { GET_MATCH } from "../ducks/match";
import { handleGetmatch } from "./handlers/match";
import { GET_SEARCH_LIST } from "../ducks/search-series";
import { handleGetSearchlist } from "./handlers/search-series";

export function* watcherSaga() {
    yield takeLatest(GET_SERIES, handleGetseries);
    yield takeLatest(GET_MATCH, handleGetmatch);
    yield takeLatest(GET_SEARCH_LIST, handleGetSearchlist);
}

