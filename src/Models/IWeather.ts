//Author-Tejasvi Raj Pant

import ILocation from './IDaily';
import IDaily from './IDaily';

export default interface IWeather {
	isLoading: boolean
	daily: null | IDaily[]
	errorMessage: null | string
	}
