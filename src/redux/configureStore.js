import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import seriesReducer from "./ducks/series";
import matchReducer from './ducks/match';
import { watcherSaga } from './sagas/rootSaga';
// import searchSeriesReducer from './ducks/search-series';

const reducer = combineReducers({
    series: seriesReducer,
    matches: matchReducer,
    // serachSeries: searchSeriesReducer
})

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware]

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;