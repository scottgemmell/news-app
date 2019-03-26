
/*
 * Types
 */
export const types = {
	GET_NEWS: "news/GET_NEWS",
	SET_NEWS: "news/SET_NEWS",
}

/*
 * Actions
 */
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

/*
 * Reducer
 */
const initialState:any = [];

export const newsReducer = (news = initialState, action:any) => {
	switch(action.type) {
		case types.SET_NEWS:
			return action.news;

		default:
			return news;
	}
}
