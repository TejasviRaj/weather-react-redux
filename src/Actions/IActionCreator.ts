import IWeatherRequestedSucceeded from './IFetchWeatherSucceeded';
import IFetchWeatherFail from './IFetchWeatherFail';
import IFetchWeatherRequested from './IFetchWeatherRequested';
import IFetchWeather from './IFetchWeather';

export type IActionCreator =
	 IFetchWeather
	| IFetchWeatherRequested
	| IWeatherRequestedSucceeded
	| IFetchWeatherFail
