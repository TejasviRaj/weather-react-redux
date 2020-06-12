import weatherReducer from './weatherReducer';
import { combineReducers } from 'redux';

const rootReducer  = combineReducers({
	weather: weatherReducer
})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer