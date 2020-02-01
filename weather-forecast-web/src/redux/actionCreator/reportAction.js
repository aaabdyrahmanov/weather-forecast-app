import { apiClient, ipapiClient } from '../../services/WeatherServices'

const reportRequest = reports => {
  const result = {
    type: 'MENUS_REPORTS_REQUEST',
    payload: reports.data
  }
  return result
}
const newReport = reports => {
  const result = {
    type: 'MENUS_REPORTS_REQUEST',
    payload: reports.data
  }
  return result
}

const postNewReport = () => async dispatch => {
  try {
    const result = await apiClient.post('/reports/new')
    dispatch(newReport(result))
  } catch (error) {
    console.log('Error: ' + error)
  }
}

const getReports = () => async dispatch => {
  try {
    const res = await ipapiClient.get()
    const { ip, city, country_code } = res.data
    console.log(ip, city, country_code)
    const result = await apiClient.get('/reports')
    dispatch(reportRequest(result))
  } catch (error) {
    console.log('Error: ' + error)
  }
}

export { getReports, postNewReport }
