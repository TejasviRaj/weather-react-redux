//Author-Tejasvi Raj Pant

import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../../Actions/Weather/actionCreatorsWeather'
import { RootState } from '../../Reducers/rootReducer';
import WeatherCard from '../WeatherCard/WeatherCard';

const App = () => {
  const state: RootState = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchWeather(27.7, 85.32));
  }, [dispatch])
  console.log("FROM APP");
  console.log(state);

  return (
    <>

<div className="container">
	  <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <form className="card card-sm">
                                <div className="card-body row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <i className="fas fa-search h4 text-body"></i>
                                    </div>
                                    <div className="col">
                                        <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords" />
                                    </div>
                                    <div className="col-auto">
                                        <button className="btn btn-lg btn-dark" type="submit">Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
      </div>
  </div>
      <WeatherCard />
    </>
  )
}

export default App;
