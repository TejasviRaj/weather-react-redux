import { FETCH_LOCATION_REQUESTED, FETCH_LOCATION_SUCCEEDED, FETCH_LOCATION_FAIL } from '../Actions/Location/ActionTypes';
import {IActionCreator} from '../Actions/IActionCreator';
import initialState from '../Store/initialState'
import ILocation from '../Models/ILocation';


//Author-Tejasvi Raj Pant

const locationReducer = (state: ILocation = initialState.location, action: IActionCreator): ILocation => {
	switch (action.type) {
		case FETCH_LOCATION_REQUESTED:
			return {
				...state,
				
			}
		case FETCH_LOCATION_SUCCEEDED:
			return {
				...state,
				lat: action.location.lat,
				lng: action.location.lng
				
			}
		case FETCH_LOCATION_FAIL:

			return {
				...state,
			
			}
		default:
			return state

	}
};

export default locationReducer;


