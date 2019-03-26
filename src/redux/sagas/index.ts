import { all } from "redux-saga/effects";
import newsSagas from "./news.saga";

export default function* rootSaga(){
	yield all([
		...newsSagas
	]);
}