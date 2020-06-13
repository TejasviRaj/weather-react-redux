//Author-Tejasvi Raj Pant

import {API_KEY, ROOT_URL, EXCLUDE} from './config';

import axios from 'axios';

export const fetchWeather = (lat: number, long: number) => {
    return axios.get(`${ROOT_URL}?lat=${lat}&lon=${long}&exclude=${EXCLUDE.join(',')}&appid=${API_KEY}`);
}