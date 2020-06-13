//Author-Tejasvi Raj Pant

import IWeather from '../Models/IWeather';

const initialState: IWeather = {
	isLoading: false,	
	daily: null,
	errorMessage: null,
	lat: null,
	long: null
}

export default initialState;