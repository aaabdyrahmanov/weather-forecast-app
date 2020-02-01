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
  baseURL: `${proxy}https://api.darksky.net/forecast/46b2ba7ea87133b337e1388c1acb173a/`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  mode: 'cors'
})

const apiCityCode = axios.create({
  baseURL: `http://www.mapquestapi.com/geocoding/v1/address`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const ipapiClient = axios.create({
  baseURL: 'https://ipapi.co/json',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export { apiClient, apiWeather, apiCityCode, ipapiClient }
