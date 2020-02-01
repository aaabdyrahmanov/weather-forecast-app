import React, { useEffect, useState } from 'react'
import { getCities } from '../../redux/actionCreator/cityAction'
import { getCityWeather } from '../../redux/actionCreator/WeatherAction'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, withRouter } from 'react-router-dom'

const Weather = () => {
  const [selectedCity, setSelectedCity] = useState()

  const cities = useSelector(state => state.cityReducer.cities)
  const weatherNow = useSelector(state => state.weatherInfo.weatherNow)

  const history = useHistory()
  const dispatch = useDispatch()

  const loadweather = () => {
    event.preventDefault()
    console.log(selectedCity)
    dispatch(getCityWeather(selectedCity))
  }

  if (localStorage.getItem('usertoken') === null) {
    history.push('/login')
    return <h1>Page Not Found</h1>
  } else {
    useEffect(() => {
      dispatch(getCities())
    }, [])
    return (
      <div className="container text-center pt-4 pb-5">
        <form method="Post" onSubmit={loadweather} className="form-inline">
          <div className="form-group center mx-auto">
            <label className="font-weight-bold">
              Choose your desired city:
              <select
                className="form-control"
                onChange={e => setSelectedCity(e.target.value)}
              >
                {cities
                  ? cities.map((city, index) => (
                      <option key={index}>{city.name}</option>
                    ))
                  : ''}
              </select>
            </label>
            <button type="submit" className="btn btn-secondary  btn-lg">
              Get Weather
            </button>
          </div>
        </form>
        {weatherNow ? (
          <div style={{ textAlign: 'center', paddingTop: '70px' }}>
            <h1 className="display-6">TimeZone: {weatherNow.timezone}</h1>
            <h1 className="display-6">
              Summary: {weatherNow.currently.summary}
            </h1>
            <h2 className="display-6">
              Temperature: {parseInt(weatherNow.currently.temperature)}
            </h2>
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default withRouter(Weather)
