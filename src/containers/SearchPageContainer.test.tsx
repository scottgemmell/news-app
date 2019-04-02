import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import { mapStateToProps, SearchPageContainer } from "./SearchPageContainer";
import SearchResults from "../components/SearchResults";
import { getNewsRequest } from "../ducks/news";
jest.mock("../services/news.api");

const defaultProps = () => ({
	news: [{id: 1, title: "One", url: "http://", created: "01-01-1970"}],
	getNewsRequest: jest.fn()
});

const setup = (overrideProps = {}) => {
	const props = Object.assign({}, defaultProps(), overrideProps);
	const wrapper = mount(<SearchPageContainer {...props} />);
	//console.log('wrapper', wrapper.debug())
	return { wrapper, props };
};

describe("<SearchPageContainer />", () => {
	const { wrapper } = setup();

	it("renders", () => {
		expect(wrapper.exists()).toBe(true);
	});

	it("onChange", () => {
		wrapper.find("input").simulate("change", { target: { value: "dogs"} });
		expect(wrapper.find("input").props().value).toEqual("dogs");
	});

	it("onSubmit", () => {
		const { wrapper } = setup()
		let prevented = false;
		wrapper.find("form").simulate("submit", { preventDefault: () => { prevented = true } });
		expect(prevented).toBe(true);
		expect(wrapper.props().news).toHaveLength(1);
	});

	it("mapStateToProps", () => {
		expect(mapStateToProps(defaultProps()).news).toEqual(defaultProps().news);
	});
});

describe("ComponentDidMount", () => {
	it("...", () => {
		const { wrapper } = setup();
		// let prevented = false;
		// const { getNewsRequest } = wrapper.props();
		// console.log('wrapper', wrapper.debug());
		//console.log(wrapper.find(SearchResults).debug());
		//const spy = jest.spyOn(SearchPageContainer.prototype, 'performSearch');
		//const wrapper = mount(<SearchPageContainer {...props} />);
		// wrapper.instance().getNewsRequest();
		// expect(spy).toHaveBeenCalled();
		console.log('wrapper', wrapper.props().news);
		const getUrl = wrapper.props().getNewsRequest;
		expect(getUrl).toBeCalled();
		//expect(wrapper.props().news).toHaveLength(10);
	});
})