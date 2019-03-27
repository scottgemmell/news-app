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

export type NewsAction = 
| { type: string; query: string }
| { type: string; news: NewsItem[]; meta: { feature: string; normalizeKey: string} };

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

const getNewsRequest = (query:string):NewsAction => {
	return {
		type: types.GET_NEWS,
		query,
	}
}

const getNewsSuccess = ({ news, feature, normalizeKey }:NewsSuccess):NewsAction => {
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
// export interface News {
// 	news: []
// 	action:any
// }

const initialState:Array<NewsItem> = []

export const newsReducer = (news = initialState, action:any):any => {
	switch(action.type) {
		case types.SET_NEWS:
			return action.news;

		default:
			return news;
	}
}
