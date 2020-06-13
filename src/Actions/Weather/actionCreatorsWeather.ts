//Author-Tejasvi Raj Pant

import {
	FETCH_WEATHER,
	FETCH_WEATHER_REQUESTED,
	FETCH_WEATHER_SUCCEEDED,
	FETCH_WEATHER_FAIL,
} from './ActionTypes';

import IFetchWeatherSucceeded from './IFetchWeatherSucceeded';
import IFetchWeatherFail from './IFetchWeatherFail';
import IFetchWeatherRequested from './IFetchWeatherRequested';
import IFetchWeather from './IFetchWeather';
import IWeather from '../../Models/IWeather';


export const fetchWeather = (lat: number, long: number): IFetchWeather => ({
	type: FETCH_WEATHER,
	lat,
	long
})
export const fetchWeatherRequested = (): IFetchWeatherRequested => ({ type: FETCH_WEATHER_REQUESTED })

export const fetchWeatherFail = (errorMessage: string): IFetchWeatherFail => ({
	type: FETCH_WEATHER_FAIL,
	errorMessage
})
export const fetchWeatherSucceeded = (payload: IWeather): IFetchWeatherSucceeded => {
	console.log("payload");
	console.log(payload);
	return ({
	type: FETCH_WEATHER_SUCCEEDED,
	payload
})}
