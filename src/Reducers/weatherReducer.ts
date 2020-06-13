import { FETCH_WEATHER_REQUESTED, FETCH_WEATHER_SUCCEEDED, FETCH_WEATHER_FAIL } from '../Actions/ActionTypes';
import IWeather from '../Models/IWeather';
import {IActionCreator} from '../Actions/IActionCreator';
import initialState from '../Store/initialState'


//Author-Tejasvi Raj Pant

const weatherReducer = (state: IWeather = initialState, action: IActionCreator): IWeather => {
	switch (action.type) {
		case FETCH_WEATHER_REQUESTED:
			return {
				...state,
				isLoading: true,
				errorMessage: null
			}
		case FETCH_WEATHER_SUCCEEDED:
			return {
				...state,
				daily: action.payload.daily,
				errorMessage: null,
				isLoading: false,
			}
		case FETCH_WEATHER_FAIL:
			return {
				...state,
				errorMessage: action.errorMessage,
				isLoading: false,
			}
		default:
			return state

	}
};

export default weatherReducer;


