//Author-Tejasvi Raj Pant

import {FETCH_LOCATION_SUCCEEDED} from './ActionTypes'
import IWeather from '../Models/IWeather';

export default interface IFetchLocationSucceeded {
	type: FETCH_LOCATION_SUCCEEDED
	payload: IWeather
}