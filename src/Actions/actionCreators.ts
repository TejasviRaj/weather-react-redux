//Author-Tejasvi Raj Pant

import {
	FETCH_WEATHER,
	FETCH_WEATHER_REQUESTED,
	FETCH_WEATHER_SUCCEEDED,
	FETCH_WEATHER_FAIL,
} from './ActionTypes';

import IFetchWeatherSucceeded from '../Actions/IFetchWeatherSucceeded';
import IFetchWeatherFail from '../Actions/IFetchWeatherFail';
import IFetchWeatherRequested from '../Actions/IFetchWeatherRequested';
import IFetchWeather from '../Actions/IFetchWeather';
import IWeather from '../Models/IWeather';


export const fetchWeather = (city: string): IFetchWeather => ({
	type: FETCH_WEATHER,
	city
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
