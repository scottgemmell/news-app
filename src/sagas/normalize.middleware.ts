import { dataNormalized } from "../ducks/normalize";

export const normalizeMiddleware = ({dispatch}:any) => (next:any) => (action:any) => {

	if(action.type.includes("SET") && action.meta.normalizeKey) {
		
		dispatch(dataNormalized({feature: action.meta.feature}));

		console.log('action.news', action.news)
		// News
		const all = action.meta.normalizeKey === "news" && action.news.hits.map((newsItem:any) => {
			newsItem = { 
				id: newsItem.created_at_i,
				title: newsItem.title,
				url: newsItem.url,
				created: newsItem.created_at
			};
			return newsItem;
		});

		const totalNewsItems = action.news.nbHits;

		const allIds = action.meta.normalizeKey === "news" && action.news.hits.map((newsItem:any) => {
			return newsItem.created_at_i;
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

		//console.log('all', all)

		next({...action, news: { all, byId: newsObj, allIds, total: totalNewsItems }, normalizeKey: null });

	} else {
		next(action);
	}

}