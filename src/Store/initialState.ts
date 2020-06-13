//Author-Tejasvi Raj Pant

import IWeather from '../Models/IWeather';

const initialState: IWeather = {
	isLoading: false,	
	daily: null,
	errorMessage: null
}

export default initialState;