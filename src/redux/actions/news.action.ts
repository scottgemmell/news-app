import { GET_NEWS, SET_NEWS } from "../constants/";
import * as api from "../../api/news.api";

export const getNewsRequest = (query:any) => {
	return {
		type: GET_NEWS,
		query,
	}
}

export const getNewsSuccess = ({ news }:any) => {
	return {
		type: SET_NEWS,
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