//Author-Tejasvi Raj Pant

import {FETCH_LOCATION_SUCCEEDED} from './ActionTypes'
import ILocation from '../../Models/ILocation';

export default interface IFetchLocationSucceeded {
	type: FETCH_LOCATION_SUCCEEDED
	location: ILocation
}