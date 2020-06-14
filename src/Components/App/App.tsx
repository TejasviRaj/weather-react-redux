//Author-Tejasvi Raj Pant

import React, { useEffect, useState, SyntheticEvent } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../../Actions/Weather/actionCreatorsWeather'
import { RootState } from '../../Reducers/rootReducer';
import WeatherCard from '../WeatherCard/WeatherCard';
import { fetchLocation } from '../../Actions/Location/actionCreatorsLocation';
import SearchBar from '../SearchBar/SearchBar';
import {INITIAL_LOCATION} from './config';

const App = () => {
  const state: RootState = useSelector((state: RootState) => state)
  const {location} = state;
  const dispatch = useDispatch()
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    dispatch(fetchLocation(INITIAL_LOCATION));

  }, [dispatch])

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(fetchLocation(searchText));
  };

  useEffect(() => {
      if (location && location.lat && location.lng) {
        dispatch(fetchWeather(location.lat, location.lng));

      }
  }, [location, dispatch])

  return (
    <>
      <SearchBar searchText = {searchText} setSearchText = {setSearchText} handleSubmit = {handleSubmit} />
      <WeatherCard />
    </>
  )
}

export default App;
