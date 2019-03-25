import { SET_NEWS } from "../constants/";

const initialState:any = [];

export const newsReducer = (news = initialState, action:any) => {
	switch(action.type) {
		case SET_NEWS:
			return action.news;

		default:
			return news;
	}
}