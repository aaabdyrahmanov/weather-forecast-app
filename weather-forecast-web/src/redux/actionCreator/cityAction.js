import { apiClient } from '../../services/WeatherServices'

const cityRequest = reports => {
  const result = {
    type: 'MENUS_CITIES_REQUEST',
    payload: reports.data
  }
  return result
}
const postCity = city => {
  const result = {
    type: 'MENUS_CITIES_NEW',
    payload: city
  }
  return result
}

const cityInfo = city => {
  const result = {
    type: 'MENUS_CITY_INFO',
    payload: city
  }
  return result
}
const updateCity = data => {
  const result = {
    type: 'MENUS_CITY_INFO',
    payload: data
  }
  return result
}

const getCities = () => async dispatch => {
  try {
    const result = await apiClient.get('/cities')
    dispatch(cityRequest(result))
  } catch (error) {
    console.log('Error: ' + error)
  }
}

const postNewCity = city => async dispatch => {
  try {
    const result = await dispatch(postCity(city))
    return await apiClient.post('/cities/new', {
      name: result.payload
    })
  } catch (error) {
    console.log('Error:' + error)
  }
}

const deleteXCity = city => async dispatch => {
  try {
    const result = await dispatch(cityInfo(city))
    console.log(result.payload)
    return await apiClient.delete(`/cities/${result.payload}`, {
      name: result.payload
    })
  } catch (error) {
    console.log('Error:' + error)
  }
}

const updateXCity = city => async dispatch => {
  try {
    const result = await dispatch(updateCity(city))
    console.log(result.payload)
    return await apiClient.put(`/cities/${result.payload.id}`, {
      name: result.payload.name
    })
  } catch (error) {
    console.log('Error:' + error)
  }
}
export { getCities, postNewCity, deleteXCity, updateXCity }
