import {
	FETCH_WEATHER,
} from './ActionTypes';

export default interface IFetchWeather {
	type: FETCH_WEATHER
	city: string
}