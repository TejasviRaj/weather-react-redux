
import {REQUEST_WEATHER_DATA, WEATHER_FETCH_SUCCESS, WEATHER_FETCH_FAIL, ActionTypes} from './actionTypes';
import {Weather} from '../Model/Weather';

export function RequestWeatherData(): ActionTypes {
  return {
    type: REQUEST_WEATHER_DATA
  }

}

export function WeatherFetchSuccess(weather: Weather): ActionTypes {
  return {
    type: WEATHER_FETCH_SUCCESS,
    weather: weather
  }
}

export function WeatherFetchFail(error: string): ActionTypes {
  return {
    type: WEATHER_FETCH_FAIL,
    errorMessage: error
  }
}
