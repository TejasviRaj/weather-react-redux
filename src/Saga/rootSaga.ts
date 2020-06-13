import { all } from 'redux-saga/effects';
import {fetchWeatherWatcher} from './Weather/weatherSaga';
import {fetchLocationWatcher} from './Location/locationSaga'

export function* rootSaga() {
  yield all([
    fetchWeatherWatcher(),
    fetchLocationWatcher()
  ]);
}

export default rootSaga;