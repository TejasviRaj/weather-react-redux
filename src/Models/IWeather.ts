//Author-Tejasvi Raj Pant

import IDaily from './IDaily';

export default interface IWeather {
	isLoading: boolean
	daily: null | IDaily[]
	errorMessage: null | string
	}
