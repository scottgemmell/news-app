
import { create } from "apisauce";

export const API = create({
	baseURL: "http://hn.algolia.com/api/v1"
});

export const getNewsApiRequest = (query:string) => {
	return API.get(`/search?query=${query}`)
}