// @ts-ignore
const range = (n:any) => [...Array(n).keys];

const getNewsApiRequest = () => {
	return Promise.resolve({
		response: {
			news: range(10).map(i => ({
				id: i,
				title: `Title ${i}`,
				url: `http://abc${i}.com/`,
				created: `${i}-${i}-2019`
			}))
		}
	})
}

export default getNewsApiRequest;