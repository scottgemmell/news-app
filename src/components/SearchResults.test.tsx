import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow, mount } from "enzyme";
import SearchResults from "./SearchResults";



describe("<SearchResults />", () => {

	const news = [];
	
	it("renders", () => {
		const wrapper = mount(<SearchResults news={news} />);
		//console.log(wrapper.debug())
		expect(wrapper.find("h2").exists()).toBe(false);
	});
});

describe("<SearchResults />", () => {

	const news = [{id: 1, title: "One", url: "http://", created: "01-01-1970"}]
	
	it("renders", () => {
		const wrapper = shallow(<SearchResults news={news} />);
		//console.log(wrapper.debug())
		expect(wrapper.find("h2").exists()).toBe(true);
		expect(wrapper.exists()).toBe(true);
	});
});