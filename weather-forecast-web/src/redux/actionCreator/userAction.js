import { apiClient } from '../../services/WeatherServices'

const userRequest = users => {
  const result = {
    type: 'MENUS_USERS_REQUEST',
    payload: users.data
  }
  return result
}
const postUser = user => {
  const result = {
    type: 'MENUS_USERS_NEW',
    payload: user
  }
  return result
}

const userInfo = user => {
  const result = {
    type: 'MENUS_USER_INFO',
    payload: user
  }
  return result
}
const updateUser = data => {
  const result = {
    type: 'MENUS_USER_INFO',
    payload: data
  }
  return result
}

const getUsers = () => async dispatch => {
  try {
    const result = await apiClient.get('/users')
    console.log(result)
    dispatch(userRequest(result))
  } catch (error) {
    console.log('Error: ' + error)
  }
}

const postNewUser = user => async dispatch => {
  try {
    const result = await dispatch(postUser(user))
    return await apiClient.post('/users/register', {
      first_name: result.payload.first_name,
      last_name: result.payload.last_name,
      email: result.payload.email,
      password: result.payload.password
    })
  } catch (error) {
    console.log('Error:' + error)
  }
}

const deleteXUser = user => async dispatch => {
  try {
    const result = await dispatch(userInfo(user))
    console.log(result.payload)
    return await apiClient.delete(`/users/${result.payload}`)
  } catch (error) {
    console.log('Error:' + error)
  }
}

const updateXUser = user => async dispatch => {
  try {
    const result = await dispatch(updateUser(city))
    console.log(result.payload)
    return await apiClient.put(`/users/${result.payload.id}`, {
      name: result.payload.name
    })
  } catch (error) {
    console.log('Error:' + error)
  }
}
export { getUsers, postNewUser, deleteXUser, updateXUser }
