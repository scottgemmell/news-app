import types from "../constants/";
import * as api from "../../api/news.api";

export const getNewsRequest = (query:any) => {
	return {
		type: types.GET_NEWS,
		query,
	}
}

export const getNewsSuccess = ({ news }:any) => {
	return {
		type: types.SET_NEWS,
		news,
	}
}

// export const getNewsRequest = (data:any) => {
// 	return {
// 		type: SET_NEWS,
// 		news: {
// 			data
// 		}
// 	}
// }