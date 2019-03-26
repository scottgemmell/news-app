import React, { Component } from 'react';
import { connect } from "react-redux";
import { getNewsRequest } from "../redux/actions/news.action"
import SearchControls from '../components/SearchControls';
import SearchResults from '../components/SearchResults';

interface SearchPageProps {
	news: any;
	getNewsRequest: Function;
}

class SearchPageContainer extends Component<SearchPageProps> {

	state = {
		searchVal: ""
	}

	componentDidMount = () => {

		const { getNewsRequest } = this.props;
		getNewsRequest();
		
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

		const { news: { hits:articles } } = this.props;

    return (
      <div>
				<SearchControls 
					searchVal={this.state.searchVal} 
					onChange={this.handleChange} 
					onSubmit={this.handleSubmit} 
				/>
        <SearchResults articles={articles} />
      </div>
    )
  }
}

function mapStateToProps(state:any) {
	return {
		news: state.news,
	}
}

export default connect(mapStateToProps, { getNewsRequest })(SearchPageContainer);