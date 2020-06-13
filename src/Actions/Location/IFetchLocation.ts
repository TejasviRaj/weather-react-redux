//Author-Tejasvi Raj Pant

import {
	FETCH_LOCATION,
} from './ActionTypes';

export default interface IFetchLocation {
	type: FETCH_LOCATION
	city: string
}