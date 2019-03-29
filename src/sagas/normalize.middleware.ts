import { dataNormalized } from "../ducks/normalize";

export const normalizeMiddleware = ({dispatch}:any) => (next:any) => (action:any) => {

	if(action.type.includes("SET") && action.meta.normalizeKey) {
		
		dispatch(dataNormalized({feature: action.meta.feature}));

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

		const newsObj:any = {};

		const byId = action.meta.normalizeKey === "news" && action.news.hits.map((newsItem:any) => {
			newsItem = {
				id: newsItem.created_at_i,
				title: newsItem.title,
				url: newsItem.url,
				created: newsItem.created_at
			};
			return newsObj[newsItem.id] = newsItem ;
		});

		console.log('news', news)

		next({...action, news: { news, byId: newsObj }, normalizeKey: null });

	} else {
		next(action);
	}

}