import React, { Component } from "react";
import { NewsItem } from "../ducks/news";
import * as R from "ramda";

interface SearchResultsProps {
	news: NewsItem[];
}

class SearchResults extends Component<SearchResultsProps> {

	render(){

		const { news } = this.props;
		//console.log('articles', articles)

		if(!news || R.isEmpty(news)) {
			return null;
		}

		return (
			<div>
				<h2>
					Results
				</h2>
				<ul>
					{news.map((article:NewsItem) => {
					return (
						<li key={article.id}>
							<a href={article.url}>{article.title}</a>
							<br/>
							<small>{article.created}</small>
						</li> 
					)
					})}      
				</ul>
			</div>
		)
	}
}

export default SearchResults;