//Author-Tejasvi Raj Pant

import {API_KEY, ROOT_URL, EXCLUDE, UNIT} from './config';

import axios from 'axios';

export const fetchWeather = (lat: number | null, long: number | null) => {
    return axios.get(`${ROOT_URL}?lat=${lat}&lon=${long}&units=${UNIT}&exclude=${EXCLUDE.join(',')}&appid=${API_KEY}`);
}