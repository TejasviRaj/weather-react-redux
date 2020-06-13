//Author-Tejasvi Raj Pant

import { put, call, takeLatest } from 'redux-saga/effects'
import IFetchLocation from '../../Actions/Location/IFetchLocation';
import {fetchLocation} from './fetchLocation';
import { FETCH_LOCATION } from '../../Actions/Location/ActionTypes';
import { fetchLocationRequested, fetchLocationSucceeded, fetchLocationFail } from '../../Actions/Location/actionCreatorsLocation';

export function* fetchLocationWatcher() {
	yield takeLatest(FETCH_LOCATION, fetchLocationWorker)
}

function* fetchLocationWorker(props: IFetchLocation) {
	try {
		yield put(fetchLocationRequested())

		const response = yield call(fetchLocation, props.city);
		yield put(fetchLocationSucceeded(response.data.results[0].geometry))
	} catch (error) {
		yield put(fetchLocationFail("Error"))
	}
}
