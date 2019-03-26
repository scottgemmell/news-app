import { dataNormalized } from "../ducks/normalize";

export const normalizeMiddleware = ({dispatch}:any) => (next:any) => (action:any) => {

	if(action.type.includes("SET") && action.meta.normalizeKey) {
		
		dispatch(dataNormalized());

		// News
		const news = action.meta.normalizeKey === "news" && action.news.hits.map((newsItem:any) => {
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