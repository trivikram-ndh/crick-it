import { call, put } from "redux-saga/effects";
import { setsearchlist } from "../../ducks/search-series";
import requestGetSearchlist from "../requests/search-series";

export function* handleGetSearchlist({searchTxt}) {
    // console.log("handle search list", searchTxt)
    try {
        const response = yield call(requestGetSearchlist, searchTxt);
        const {data} = response;
        yield put(setsearchlist(data.data));
    } catch(error) {
        console.log(error);
    }
}