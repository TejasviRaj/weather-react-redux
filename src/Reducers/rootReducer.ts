//Author-Tejasvi Raj Pant

import weatherReducer from './weatherReducer';
import locationReducer from './locationReducer'
import { combineReducers } from 'redux';

const rootReducer  = combineReducers({
	location: locationReducer,
	weather: weatherReducer,
})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer