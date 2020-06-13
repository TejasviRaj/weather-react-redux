//Author-Tejasvi Raj Pant

import {
	FETCH_WEATHER,
} from './ActionTypes';

export default interface IFetchWeather {
	type: FETCH_WEATHER
	lat: number | null,
	long: number | null
}