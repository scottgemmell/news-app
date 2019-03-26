import React, { Component } from 'react'
import * as R from "ramda";

interface SearchResultsProps {
	news: any;
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
        <div>
            <h2>
              Results
            </h2>
            <ul>
            {news.map((article:any) => {
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
    </div>
  )
  }
}

export default SearchResults;