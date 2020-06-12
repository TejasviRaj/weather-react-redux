//Author-Tejasvi Raj Pant

import ILocation from './ILocation';
import ICurrent from './ICurrent';

export default interface IWeather {
	isLoading: boolean
	location: null | ILocation
	current: null | ICurrent
	errorMessage: null | string
	}
