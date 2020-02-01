import { apiWeather, apiCityCode } from '../../services/WeatherServices'

const cityWeather = city => {
  const result = {
    type: 'MENUS_WEATHER_INFO',
    payload: city.data
  }
  return result
}

const getCityWeather = city => async dispatch => {
  try {
    const res = await apiCityCode.get('/', {
      params: {
        key: 'CVXTCVO6k845LZWTAnZ8zNaGRdl9SADK',
        location: city,
        maxResults: 1
      }
    })
    console.log(res)
    const lat = await res.data.results[0].locations[0].latLng.lat
    const lng = await res.data.results[0].locations[0].latLng.lng
    const started = new Date()
    const result = await apiWeather.get(`/${lat},${lng}`, {
      params: {
        units: 'ca',
        exclude: 'minutely,hourly,daily',
        lang: 'en'
      }
    })

    if (!result) {
      const x = 'Fail'
      console.log(x)
    }
    const finished = new Date()

    console.log(result, finished - started)
    dispatch(cityWeather(result))
  } catch (error) {
    console.log('Error: ' + error)
  }
}

export { getCityWeather }
