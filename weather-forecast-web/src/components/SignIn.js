import React, { useState, Fragment } from 'react'

import { useHistory, withRouter } from 'react-router-dom'

import { login } from './userFunctions'

const SignInUp = () => {
  const [signIn, setSignIn] = useState(true)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const history = useHistory()

  const onSubmit = async event => {
    event.preventDefault()
    const user = {
      email: email,
      password: password
    }
    const result = await login(user)
    if (result) {
      history.push('/dashboard')
    }
  }

  if (signIn === false) {
    history.push('/register')
  }

  if (localStorage.getItem('usertoken') === null) {
    return (
      <Fragment>
        <div className="conainer">
          <div className="form-boxx">
            <div className="button-boxx">
              <div
                className="btnn"
                style={{ left: signIn ? '0' : '110px' }}
              ></div>
              <button
                type="button"
                className="toggle-btnn"
                onClick={() => setSignIn(true)}
              >
                Sign In
              </button>
              <button
                type="button"
                className="toggle-btnn"
                onClick={() => setSignIn(false)}
              >
                Sign Up
              </button>
            </div>
            <form
              style={{ left: signIn ? '50px' : '-400px' }}
              className="sign-inn input-groupp"
              method="POST"
              onSubmit={onSubmit}
            >
              <input
                type="text"
                className="input-fieldd"
                name="email"
                placeholder="E-mail"
                onChange={e => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                className="input-fieldd"
                name="password"
                placeholder="Password"
                autoComplete="off"
                onChange={e => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="submit-btnn">
                Sign in
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

export default withRouter(SignInUp)
