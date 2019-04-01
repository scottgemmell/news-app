import { DATA_NORMALIZED, dataNormalized } from "./normalize";
import { types } from "./news";

describe("Normalize Duck", () => {
	it("action dataNormalized", () => {
		const action = dataNormalized({ feature: types.NEWS });
		expect(action).toEqual({
			type: `${types.NEWS} ${DATA_NORMALIZED}`
		});
	});
});