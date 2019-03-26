import { dataNormalized } from "../ducks/normalize";

export const normalizeMiddleware = ({dispatch}:any) => (next:any) => (action:any) => {

	if(action.type.includes("SET") && action.meta.normalizeKey) {
		
		dispatch(dataNormalized());
		const news = action.news.hits.map((newsItem:any, i:number) => {
			newsItem = { 
				id: newsItem.created_at_i,
				title: newsItem.title,
				url: newsItem.url,
				created: newsItem.created_at
			};
			return newsItem;
		});
		next({...action, news, normalizeKey: null });

	} else {
		next(action);
	}

}