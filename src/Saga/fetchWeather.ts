//Author-Tejasvi Raj Pant

import {API_KEY, ROOT_URL} from './config';

import axios from 'axios';

export const fetchWeather = (city: string) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=27.708317&lon=85.3205817&exclude=minutely,hourly&appid=5067c8b178326959f4731b3b1953cfd2`);
}