import {
  apiWeather,
  apiCityCode,
  ipapiClient
} from '../../services/WeatherServices'

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
    var status
    console.log(result)
    if (result.status === 200) {
      status = 'Success'
    } else {
      status = 'Failure'
    }
    const ress = await ipapiClient.get()
    if (ress) {
      const { ip, city, country_code } = ress.data
      console.log('ip: ', ip, city, country_code)
    }
    console.log(status)
    console.log(' finished + ', finished - started, ' ---- milliseconds')
    console.log(started)
    console.log(finished)
    dispatch(cityWeather(result))
  } catch (error) {
    console.log('Error: ' + error)
  }
}

export { getCityWeather }
