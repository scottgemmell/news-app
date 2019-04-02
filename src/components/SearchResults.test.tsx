import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import SearchResults from "./SearchResults";



describe("<SearchResults />", () => {
	
	// it("without news items", () => {
	// 	const wrapper = mount(<SearchResults news={[]} />);
	// 	//console.log(wrapper.debug())
	// 	expect(wrapper.find("h2").exists()).toBe(false);
	// });

	const news = [{id: 1, title: "One", url: "http://", created: "01-01-1970"}]
	
	it("with news", () => {
		const wrapper = shallow(<SearchResults news={news} />);
		//console.log(wrapper.debug())
		expect(wrapper.find("h2").exists()).toBe(true);
		expect(wrapper.exists()).toBe(true);
	});
});