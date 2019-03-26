import { takeEvery, call, put } from "redux-saga/effects";
import { GET_NEWS } from "../constants";
import { getNewsSuccess } from "../actions/news.action";
import { getNewsApiRequest } from "../../api/news.api";

export function* getNews():any {
	try {
        //yield put(actions.setLoader(true));
        const result = yield call(getNewsApiRequest);
		yield put(getNewsSuccess({
			news: result.data
		}));
        //yield put(actions.setLoader(false));
	} catch(e) {
        //yield put(actions.setNotification("An error occurred when trying to get the posts"));
        console.log(e);
	}
}

export function* watchGetNewsRequest() {
	yield takeEvery(GET_NEWS, getNews)
  }