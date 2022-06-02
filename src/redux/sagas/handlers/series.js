import { call, put } from "redux-saga/effects";
import { setseries } from "../../ducks/series";
import requestGetseries from "../requests/series";

export function* handleGetseries() {
    try {
        const response = yield call(requestGetseries);
        // console.log("data from handle series::", response);
        const { data } = response;
        yield put(setseries(data.data));
    } catch(error) {
        console.log(error);
    }

}