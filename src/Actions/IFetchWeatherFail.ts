import {
	FETCH_WEATHER_FAIL,
} from './ActionTypes';

export default interface IFetchWeatherFail {
	type: FETCH_WEATHER_FAIL
	errorMessage: string
}