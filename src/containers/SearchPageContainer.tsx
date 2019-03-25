// @ts-ignore
import React, { Component, SyntheticEvent } from 'react'
import SearchControls from '../components/SearchControls';
import SearchResults from '../components/SearchResults';

export default class SearchPageContainer extends Component {

	state = {
		searchVal: ""
	}

	handleChange = (e: SyntheticEvent) => {
		const { value } = e.target as HTMLInputElement;
		this.setState({ searchVal: value })
		console.log('handleChange()', value);
	}

	handleSubmit = (e: Event) => {
		e.preventDefault();
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
