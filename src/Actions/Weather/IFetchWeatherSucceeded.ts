//Author-Tejasvi Raj Pant

import {FETCH_WEATHER_SUCCEEDED} from './ActionTypes'
import IWeather from '../../Models/IWeather';

export default interface IFetchWeatherSucceeded {
	type: FETCH_WEATHER_SUCCEEDED
	payload: IWeather
}