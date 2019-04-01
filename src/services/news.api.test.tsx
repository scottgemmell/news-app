import { getNewsApiRequest } from "./news.api";

it("Fetch API (promise)", () => {
	expect(getNewsApiRequest("dogs")).resolves.toEqual("http://hn.algolia.com/api/v1/search?query=dogs");
});