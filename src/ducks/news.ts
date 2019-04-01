/*
 * Types
 */

export const types = {
	NEWS: "[News]",
	GET_NEWS: "[News] GET_NEWS",
	SET_NEWS: "[News] SET_NEWS",
}

export type GET_NEWS = typeof types.GET_NEWS;
export type SET_NEWS = typeof types.SET_NEWS;

/*
 * Actions
 */

export interface NewsRequestAction { 
	type: GET_NEWS; 
	query: string 
}

export interface NewsSuccessAction { 
	type: SET_NEWS
	news: NewsItem[] 
	meta: { 
		feature: string
		normalizeKey: string
	}
};

export interface NewsItem {
	id: number
	title: string
	url: string
	created: string
}

export interface NewsSuccess {
	news: NewsItem[]
	feature: string
	normalizeKey: string
}

export const getNewsRequest = (query:string):NewsRequestAction => {
	return {
		type: types.GET_NEWS,
		query,
	}
}

export const getNewsSuccess = ({ news, feature, normalizeKey }:NewsSuccess):NewsSuccessAction => {
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

const initialState:NewsItem[] = [];

export const newsReducer = (news = initialState, action:NewsSuccessAction):NewsItem[] => {
	switch(action.type) {
		case types.SET_NEWS:
			return action.news;

		default:
			return news;
	}
}
