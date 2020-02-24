import React from "react";
import SearchPageContainer from "./containers/SearchPageContainer";

const App = () => {
  return (
	<div className="Page">
		<header className="App-header">
			<h1>
				News
			</h1>
		</header>
		<main>
			<SearchPageContainer />
		</main>
	</div>
  )
};

export default App;