//Author-Tejasvi Raj Pant

import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../Reducers/weatherReducer';
import { fetchWeatherWatcher } from '../Saga/saga';
import initialState from './initialState'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(fetchWeatherWatcher)

export default store
