import { getNewsApiRequest } from "./news.api";

it("test", () => {
	expect(getNewsApiRequest("dogs")).resolves.toEqual("http://hn.algolia.com/api/v1/search?query=dogs");
});