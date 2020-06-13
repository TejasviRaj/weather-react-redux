//Author-Tejasvi Raj Pant

import IWeatherRequestedSucceeded from './Weather/IFetchWeatherSucceeded';
import IFetchWeatherFail from './Weather/IFetchWeatherFail';
import IFetchWeatherRequested from './Weather/IFetchWeatherRequested';
import IFetchWeather from './Weather/IFetchWeather';

import IFetchLocationSucceeded from './Location/IFetchLocationSucceeded ';
import IFetchLocationFail from './Location/IFetchLocationFail';
import IFetchLocationRequested from './Location/IFetchLocationRequested';
import IFetchLocation from './Location/IFetchLocation';

export type IActionCreator =
	 IFetchWeather
	| IFetchWeatherRequested
	| IWeatherRequestedSucceeded
	| IFetchWeatherFail
	| IFetchLocation
	| IFetchLocationRequested
	| IFetchLocationSucceeded
	| IFetchLocationFail
