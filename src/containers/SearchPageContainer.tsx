import React, { Component } from 'react';
import { connect } from "react-redux";
import { actions, NewsItem } from "../ducks/news"
import SearchControls from '../components/SearchControls';
import SearchResults from '../components/SearchResults';

interface SearchPageProps {
	news: any;
	getNewsRequest: Function;
}

class SearchPageContainer extends Component<SearchPageProps> {

	state = {
		searchVal: "dogs"
	}

	componentDidMount = () => {
		const { getNewsRequest }:{ getNewsRequest: Function } = this.props;
		getNewsRequest(this.state.searchVal);
	}

	handleChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
		const { value }:{ value:string } = event.target;
		this.setState({ searchVal: value })
	}

	handleSubmit = (event:React.FormEvent<HTMLFormElement>):void => {
		event.preventDefault();
		//console.log('handleSubmit()', this.state);
		const { getNewsRequest }:{ getNewsRequest:Function } = this.props;
		getNewsRequest(this.state.searchVal);
		this.setState({ searchVal:"" });
	}

	render():JSX.Element {

		const { news } = this.props;

		return (
			<div>
				<SearchControls 
					searchVal={this.state.searchVal} 
					onChange={this.handleChange} 
					onSubmit={this.handleSubmit} 
				/>
				<SearchResults news={news} />
			</div>
		)
	}
}

const mapStateToProps = (state:any) => {
	//console.log('state', state)
	return {
		news: state.news,
	}
}

export default connect(mapStateToProps, { getNewsRequest: actions.getNewsRequest })(SearchPageContainer);