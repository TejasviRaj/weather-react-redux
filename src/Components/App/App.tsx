//Author-Tejasvi Raj Pant

import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../../Actions/Weather/actionCreatorsWeather'
import { RootState } from '../../Reducers/rootReducer';
import WeatherCard from '../WeatherCard/WeatherCard';
import { fetchLocation } from '../../Actions/Location/actionCreatorsLocation';
import SearchBar from '../SearchBar/SearchBar';

const App = () => {
  const state: RootState = useSelector((state: RootState) => state)
  const {location} = state;
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchLocation("London"));

  }, [dispatch])

  useEffect(() => {
      if (location && location.lat && location.lng) {
        dispatch(fetchWeather(location.lat, location.lng));

      }
  }, [location])

  return (
    <>
      <SearchBar />
      <WeatherCard />
    </>
  )
}

export default App;
