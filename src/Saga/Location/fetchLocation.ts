//Author-Tejasvi Raj Pant

import {API_KEY, ROOT_URL} from './config';

import axios from 'axios';

export const fetchLocation = (city: string) => {
    return axios.get(`${ROOT_URL}?q=${city}&key=${API_KEY}`);
}