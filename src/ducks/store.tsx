import { createStore, combineReducers, applyMiddleware } from 'redux'
import { newsReducer } from './news';
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";
import { normalizeMiddleware } from "../sagas/normalize.middleware";

const logger = createLogger({
	collapsed: true,
	diff: true
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({
	// Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const rootReducer = combineReducers({
	news: newsReducer
})

export const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
	applyMiddleware(sagaMiddleware, normalizeMiddleware, logger),
	// other store enhancers if any
));
sagaMiddleware.run(rootSaga);
