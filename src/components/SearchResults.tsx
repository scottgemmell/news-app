import React from "react";
import { NewsItem } from "../ducks/news";

interface SearchResultsProps {
	news: NewsItem[];
}

const SearchResults = ({ news = [] }:SearchResultsProps) => {
  return (
	<div>
		<h2>
			Results
		</h2>
		<ul>
			{news.map((article:NewsItem):JSX.Element => {
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
};

export default SearchResults;