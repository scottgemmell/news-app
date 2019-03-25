import React, { Component, SyntheticEvent } from 'react'
import { create } from "apisauce"
import SearchControls from '../components/SearchControls';
import SearchResults from '../components/SearchResults';

export default class SearchPageContainer extends Component {

	state = {
		searchVal: ""
	}

	componentDidMount = () => {
		const query = "dogs";
		const api = create({
			baseURL: "http://hn.algolia.com/api/v1",
			headers: { Accept: "application/json" }
		});
		api
			.get(`/search?query=${query}`)
			.then(console.log)
	}
	

	handleChange = (event:any) => {
		const { value } = event.target;
		this.setState({ searchVal: value })
		console.log('handleChange()', value);
	}

	handleSubmit = (event:any) => {
		event.preventDefault();
		console.log('handleSubmit()', this.state);
	}

  render() {
    return (
      <div>
        <SearchControls searchVal={this.state.searchVal} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <SearchResults />
      </div>
    )
  }
}
