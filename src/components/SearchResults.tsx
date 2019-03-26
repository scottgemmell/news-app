import React, { Component } from 'react'
import * as R from "ramda";

interface SearchResultsProps {
	articles: any;
}

class SearchResults extends Component<SearchResultsProps> {

  render(){

    const { articles } = this.props;
    //console.log('articles', articles)

    if(!articles || R.isEmpty(articles)) {
      return null;
    }


    return (
      <div>
        <div>
            <h2>
              Results
            </h2>
            <ul>
            {articles.map((article:any) => {
              return (
                <li key={article.created_at_i}>
                    <a href={article.url}>{article.title}</a>
                    <br/>
                    <small>{article.created_at}</small>
                </li> 
              )
            })}
              
            </ul>
          </div>
    </div>
  )
  }
}

export default SearchResults;