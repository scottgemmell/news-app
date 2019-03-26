
/*
 * Types
 */
export const types = {
	NEWS: "[News]",
	GET_NEWS: "[News] GET_NEWS",
	SET_NEWS: "[News] SET_NEWS",
}

/*
 * Actions
 */
const getNewsRequest = (query:string) => {
	return {
		type: types.GET_NEWS,
		query,
	}
}

const getNewsSuccess = ({ news, feature, normalizeKey }:any) => {
	return {
		type: types.SET_NEWS,
		news,
		meta: { 
			feature,
			normalizeKey
		}
	}
}

export const actions = {
	getNewsRequest,
	getNewsSuccess,
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
