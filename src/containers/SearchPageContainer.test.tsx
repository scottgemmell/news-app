import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import { mapStateToProps, SearchPageContainer } from "./SearchPageContainer";

const defaultProps = () => ({
	news: [{id: 1, title: "One", url: "http://", created: "01-01-1970"}],
	getNewsRequest: jest.fn()
});

const setup = (overrideProps = {}) => {
	const props = Object.assign({}, defaultProps(), overrideProps);
	const wrapper = mount(<SearchPageContainer {...props} />);
	console.log('wrapper', wrapper.debug())
	return { wrapper, props };
};

describe("<SearchPageContainer />", () => {
	it("renders", () => {
		const wrapper = setup();
		expect(wrapper.wrapper.exists()).toBe(true);
	});

	it("onChange", () => {
		const wrapper = setup();
		wrapper.wrapper.find("input").simulate("change", {
			target: { value: "Dogs"}
		});
		expect(wrapper.wrapper.find("input").props().value).toEqual("Dogs");
	});

	it("onSubmit", () => {
		const wrapper = setup();
		let prevented = false;
		wrapper.wrapper.find("form").simulate("submit", {
			preventDefault: () => { 
				prevented = true
			}
		});
		expect(prevented).toBe(true);
	});

	it("mapStateToProps", () => {
		expect(mapStateToProps(defaultProps()).news).toEqual(defaultProps().news);
	});
});