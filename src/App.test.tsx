import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import App from "./App";

describe("<App />", () => {
	it("renders", () => {
		const wrapper = shallow(<App />);
		expect(wrapper.exists()).toBe(true);
	});
});