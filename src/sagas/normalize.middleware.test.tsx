import { types } from "../ducks/news";
import { normalizeMiddleware } from "./normalize.middleware";

const fakeStore = { dispatch: jest.fn() };
const fakeNext = jest.fn();
const fakeSetAction = {
	type: types.SET_NEWS,
	news: {
		hits: [
			{
				created_at_i: "1",
				title: "One",
				url: "http://",
				created_at: "1970-01-01"
			}
		],
	},
	meta: { 
		feature: "[News]",
		normalizeKey: "news"
	}
};
const fakeGetAction = {
	type: types.GET_NEWS,
	query: "dogs"
};

describe("normalizeMiddleware", () => {
	it("Set", () => {
		normalizeMiddleware(fakeStore)(fakeNext)(fakeSetAction);
	})

	it("Get", () => {
		normalizeMiddleware(fakeStore)(fakeNext)(fakeGetAction);
	})
});