import {API_KEY, ROOT_URL} from './config';

import axios from 'axios';

export const fetchWeather = (city: string) => {
    return axios.get(`${ROOT_URL}?access_key=${API_KEY}&query=${city}`);
}