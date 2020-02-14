import { apiWeather, ipapiClient } from '../../services/WeatherServices'

const cityWeather = city => {
  const result = {
    type: 'MENUS_WEATHER_INFO',
    payload: city.data
  }
  console.log('ACTION RESULT', result)
  return result
}

const getCityWeather = city => async dispatch => {
  try {
    const result = await apiWeather.get(`/weather`, {
      params: {
        q: city,
        APPID: '2248b2ff3f3a4348db31ddcdff245f02'
      }
    })
    if (!result) {
      const x = 'Fail'
      console.log(x)
    }
    console.log('RESULT', result)
    const finished = new Date()
    var status
    console.log(result)
    if (result.status === 200) {
      status = 'Success'
    } else {
      status = 'Failure'
    }
    dispatch(cityWeather(result))
    const ress = await ipapiClient.get()
    if (ress) {
      const { ip, city, country_code } = ress.data
      console.log('ip: ', ip, city, country_code)
    }
    console.log(status)
    console.log(' finished + ', finished - started, ' ---- milliseconds')
    console.log(started)
    console.log(finished)
  } catch (error) {
    console.log('Error: ' + error)
  }
}

export { getCityWeather }
