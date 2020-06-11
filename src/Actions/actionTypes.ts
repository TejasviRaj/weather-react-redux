import * as Actions from "./actionTypes";
import {Weather} from '../Model/Weather';

export const REQUEST_WEATHER_DATA = "REQUEST_WEATHER_DATA";
export const WEATHER_FETCH_SUCCESS = "WEATHER_FETCH_SUCCESS";
export const WEATHER_FETCH_FAIL = "WEATHER_FETCH_FAIL";


interface RequestWeatherData {
    type: typeof REQUEST_WEATHER_DATA
  }
  
  interface WeatherFetchSuccess {
    type: typeof WEATHER_FETCH_SUCCESS,
    weather: Weather
  }
  
  interface WeatherFetchFail {
    type: typeof WEATHER_FETCH_FAIL,
    errorMessage: string
  }
  
  export type ActionTypes = RequestWeatherData | WeatherFetchSuccess | WeatherFetchFail
