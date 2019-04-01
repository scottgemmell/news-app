import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import { 
	types, 
	getNewsRequest, 
	getNewsSuccess, 
	newsReducer 
} from "./news";

const query = "Dogs";
const payload = { 
	news: [{id: 1, title: "One", url: "http://", created: "01-01-1970"}],
	feature: "News",
	normalizeKey: "News"
};


describe("News Duck", () => {
	it("action getNewsRequest", () => {
		const action = getNewsRequest(query);
		expect(action).toEqual({
			type: types.GET_NEWS,
			query,
		});
	});
	it("action getNewsSuccess", () => {
		const action = getNewsSuccess(payload);
		expect(action).toEqual({
			type: types.SET_NEWS,
			news: payload.news,
			meta: {
				feature: payload.feature,
				normalizeKey: payload.normalizeKey
			}
		});
	});

	it("GET returns empty initialState", () => {
		const newState = newsReducer([], getNewsRequest());
		expect(newState).toEqual([]);
	});

	it("SET returns news", () => {
		const newState = newsReducer([], getNewsSuccess(payload));
		expect(newState).toEqual(payload.news);
	});

});