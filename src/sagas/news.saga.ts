// @ts-ignore
import { fork, call, put, take } from "redux-saga/effects";
import { types, actions } from "../ducks/news";
import { getNewsApiRequest } from "../services/news.api";

export function* getNews(query:string) {
	try {
		const result = yield call(getNewsApiRequest, query);
		yield put(actions.getNewsSuccess({
			news: result.data,
			normalizeKey: "yup",
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