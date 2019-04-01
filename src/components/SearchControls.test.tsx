import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow, mount } from "enzyme";
import SearchControls from "./SearchControls";

describe("<SearchControls />", () => {
	it("renders", () => {
		const wrapper = shallow(<SearchControls />);
		expect(wrapper.exists()).toBe(true);
	});
});