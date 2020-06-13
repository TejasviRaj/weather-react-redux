//Author-Tejasvi Raj Pant

import {
	FETCH_LOCATION_FAIL,
} from './ActionTypes';

export default interface IFetchLocationFail {
	type: FETCH_LOCATION_FAIL
	errorMessage: string
}