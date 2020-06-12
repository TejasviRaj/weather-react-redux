import React, { useEffect} from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from './Actions/actionCreators'
import {RootState} from './Reducers/rootReducer'


const App = () => {
  const state: RootState = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  useEffect (() => {
    dispatch(fetchWeather("Kathmandu"));
  }, [dispatch])
  console.log("FROM APP");
  console.log(state);
  return (
    <> 
        ABC
    </>
  );
}

export default App;
