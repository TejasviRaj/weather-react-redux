//Author-Tejasvi Raj Pant

import IWeather from '../Models/IWeather';
import ILocation from '../Models/ILocation';

const weather: IWeather = {
	isLoading: false,	
	daily: null,
	errorMessage: null,
}

const location: ILocation = {
	lat: null,
	lng: null,
	name: null
}

const initialState = {
	weather: weather,
	location: location
}

export default initialState;