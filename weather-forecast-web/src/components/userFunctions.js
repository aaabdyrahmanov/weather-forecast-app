import axios from 'axios'

const register = async newUser => {
  try {
    await axios.post('http://localhost:1234/api/v1/users/register', {
      first_name: newUser.firstName,
      last_name: newUser.lastName,
      email: newUser.email,
      password: newUser.password
    })
    alert('You have succesfully registered! Login with your information')
  } catch (e) {
    alert('Email adress is already in use.')
  }
}

const login = async user => {
  return axios
    .post('http://localhost:1234/api/v1/users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
}

export { register, login }
