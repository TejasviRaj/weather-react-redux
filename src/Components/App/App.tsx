//Author-Tejasvi Raj Pant

import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../../Actions/actionCreators'
import { RootState } from '../../Reducers/rootReducer';
import WeatherCard from '../WeatherCard/WeatherCard';

const App = () => {
  const state: RootState = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchWeather("Kathmandu"));
  }, [dispatch])
  console.log("FROM APP");
  console.log(state);

  return (
    <>
      <WeatherCard />
    </>
  )
}

export default App;
