//Author-Tejasvi Raj Pant

import {
	FETCH_LOCATION,
	FETCH_LOCATION_REQUESTED,
	FETCH_LOCATION_SUCCEEDED,
	FETCH_LOCATION_FAIL,
} from './ActionTypes';

import IFetchLocationSucceeded from './IFetchLocationSucceeded ';
import IFetchLocationFail from './IFetchLocationFail';
import IFetchLocationRequested from './IFetchLocationRequested';
import IFetchLocation from './IFetchLocation';
import ILocation from '../../Models/ILocation';

export const fetchLocation = (city: string): IFetchLocation => ({
	type: FETCH_LOCATION,
	city
})
export const fetchLocationRequested = (): IFetchLocationRequested => ({ type: FETCH_LOCATION_REQUESTED })

export const fetchLocationFail = (errorMessage: string): IFetchLocationFail => ({
	type: FETCH_LOCATION_FAIL,
	errorMessage
})
export const fetchLocationSucceeded = (location: ILocation): IFetchLocationSucceeded => {

	return ({
	type: FETCH_LOCATION_SUCCEEDED,
	location: location
})}
