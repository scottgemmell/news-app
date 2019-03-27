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

export interface NewsRequestAction { 
	type: string; 
	query: string 
}

export interface NewsSuccessAction { 
	type: string
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

const getNewsRequest = (query:string):NewsRequestAction => {
	return {
		type: types.GET_NEWS,
		query,
	}
}

const getNewsSuccess = ({ news, feature, normalizeKey }:NewsSuccess):NewsSuccessAction => {
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
