import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:1234/api/v1`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const proxy = 'https://cors-anywhere.herokuapp.com/'

const apiWeather = axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  mode: 'cors'
})

const ipapiClient = axios.create({
  baseURL: 'https://ipapi.co/json',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export { apiClient, apiWeather, ipapiClient }
