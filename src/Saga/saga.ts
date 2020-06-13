//Author-Tejasvi Raj Pant

import { put, call, takeLatest } from 'redux-saga/effects'
import { fetchWeatherRequested, fetchWeatherSucceeded, fetchWeatherFail } from '../Actions/Weather/actionCreatorsWeather'
import { FETCH_WEATHER } from '../Actions/Weather/ActionTypes'
import IFetchWeather from '../Actions/Weather/IFetchWeather';
import {fetchWeather} from './fetchWeather';

export function* fetchWeatherWatcher() {
	yield takeLatest(FETCH_WEATHER, fetchWeatherWorker)
}

function* fetchWeatherWorker(props: IFetchWeather) {
	try {
		yield put(fetchWeatherRequested())
		const response = yield call(fetchWeather, props.lat, props.long);
		yield put(fetchWeatherSucceeded(response.data))
	} catch (error) {
		yield put(fetchWeatherFail("Error"))
	}
}
