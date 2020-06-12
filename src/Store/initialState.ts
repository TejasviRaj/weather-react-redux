import IWeather from '../Models/IWeather';

const initialState: IWeather = {
	isLoading: false,	
	location: null,
	current: null,
	errorMessage: null
}

export default initialState;