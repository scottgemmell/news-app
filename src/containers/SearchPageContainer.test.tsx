import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow, mount } from "enzyme";
import SearchPageContainer from "./SearchPageContainer";

describe("<SearchPageContainer />", () => {
	it("renders", () => {
		const wrapper = shallow(<SearchPageContainer />);
		expect(wrapper.exists()).toBe(true);
	});
});