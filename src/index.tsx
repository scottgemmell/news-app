import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./redux/sagas/";
import rootReducer from "./redux/reducers/";
import './assets/scss/Styles.scss';
import App from './App'; 

const logger = createLogger({
	// ...options
	collapsed: true,
	diff: true
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({
	// Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
	applyMiddleware(sagaMiddleware, logger),
	// other store enhancers if any
));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);
