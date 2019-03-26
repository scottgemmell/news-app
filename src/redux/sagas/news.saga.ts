// @ts-ignore
import { fork, call, put, take } from "redux-saga/effects";
import types from "../constants";
import { getNewsSuccess } from "../actions/news.action";
import { getNewsApiRequest } from "../../api/news.api";

export function* getNews(query:string) {
	try {
		const result = yield call(getNewsApiRequest, query);
		yield put(getNewsSuccess({
			news: result.data
		}));
	} catch(e) {
    	console.log(e);
	}
}

export function* watchGetNewsRequest() {
	while(true) {
		const { query } = yield take(types.GET_NEWS);
		yield fork(getNews, query);
	}
}

const newsSagas = [
	fork(watchGetNewsRequest),
];

export default newsSagas;