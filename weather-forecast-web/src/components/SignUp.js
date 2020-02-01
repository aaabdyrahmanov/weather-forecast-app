import React, { useState, Fragment } from 'react'
import { register } from './UserFunctions'
import { useHistory, withRouter } from 'react-router-dom'

const SignUp = () => {
  const [signUp, setSignUp] = useState(true)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let history = useHistory()

  const onSubmit = async event => {
    event.preventDefault()

    const newUser = {
      firstName,
      lastName,
      email,
      password
    }
    await register(newUser)
    history.push('/login')
  }

  if (signUp === false) {
    history.push('/login')
  }

  if (localStorage.getItem('usertoken') === null) {
    return (
      <Fragment>
        <div className="conainer">
          <div className="form-boxx">
            <div className="button-boxx">
              <div
                className="btnn"
                style={{ left: signUp ? '110px' : '0px' }}
              ></div>
              <button
                type="button"
                className="toggle-btnn"
                onClick={() => setSignUp(false)}
                required
              >
                Sign In
              </button>
              <button
                type="button"
                className="toggle-btnn"
                onClick={() => setSignUp(true)}
                required
              >
                Sign Up
              </button>
            </div>

            <form
              className="sign-upp input-groupp"
              style={{ left: signUp ? '50px' : '450px' }}
              onSubmit={onSubmit}
            >
              <input
                type="text"
                className="input-fieldd"
                placeholder="First Name"
                onChange={e => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                className="input-fieldd"
                placeholder="Last Name"
                onChange={e => setLastName(e.target.value)}
                required
              />
              <input
                type="text"
                className="input-fieldd"
                placeholder="E-mail"
                onChange={e => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                className="input-fieldd"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="submit-btnn">
                Get Started
              </button>
            </form>
          </div>
        </div>
      </Fragment>
    )
  } else {
    history.push('/')
    return <h1>Page Not Found</h1>
  }
}

export default withRouter(SignUp)
