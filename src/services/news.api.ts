
import { create } from "apisauce";

const api = create({
	baseURL: "http://hn.algolia.com/api/v1",
	headers: { Accept: "application/json" }
});

export const getNewsApiRequest = (query:string) => {
	return api.get(`/search?query=${query}`)
}