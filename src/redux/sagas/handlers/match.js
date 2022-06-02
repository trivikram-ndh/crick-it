import { call, put } from "redux-saga/effects";
import { setmatch } from "../../ducks/match";
import requestGetmatch from "../requests/match";

export function* handleGetmatch( {id} ) {
    try {
        const response = yield call(requestGetmatch, id );
        // console.log("data from handle match::", response);
        const { data } = response;
        yield put(setmatch(data.data));
    } catch(error) {
        console.log(error);
    }
}