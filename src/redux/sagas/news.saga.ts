// @ts-ignore
import { takeEvery, fork, call, put, take } from "redux-saga/effects";
import { GET_NEWS } from "../constants";
import { getNewsRequest, getNewsSuccess } from "../actions/news.action";
import { getNewsApiRequest } from "../../api/news.api";

export function* getNews(query:string = "dogs") {
	//console.log('getNewsSaga')
	try {
        //yield put(actions.setLoader(true));
		const result = yield call(getNewsApiRequest, query);
		yield put(getNewsSuccess({
			news: result.data
		}));

			
			//yield call(getPosts);
	
        //yield put(actions.setLoader(false));
	} catch(e) {
        //yield put(actions.setNotification("An error occurred when trying to get the posts"));
        console.log(e);
	}
}

export function* watchGetNewsRequest() {
	//console.log('watchGetNewsRequest')
	//yield takeEvery(GET_NEWS, getNews);

	//const { postId } = yield take(actions.DELETE_POST);
	//yield call(deletePost, postId);
	while(true) {
		const { query } = yield take(GET_NEWS);
		//console.log('query', query);
		yield fork(getNews, query);
	}
}

const newsSagas = [
	fork(watchGetNewsRequest),
];

export default newsSagas;