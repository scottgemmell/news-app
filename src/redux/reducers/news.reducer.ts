import types from "../constants/";

const initialState:any = [];

export const newsReducer = (news = initialState, action:any) => {
	switch(action.type) {
		case types.SET_NEWS:
			return action.news;

		default:
			return news;
	}
}