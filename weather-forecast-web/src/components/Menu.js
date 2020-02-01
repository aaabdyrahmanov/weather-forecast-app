import React, { useEffect, useState } from 'react'

import { useHistory, withRouter } from 'react-router-dom'

import jwt_decode from 'jwt-decode'

const Menu = () => {
  const [firstName, setFirstName] = useState('')

  const history = useHistory()

  if (localStorage.getItem('usertoken') === null) {
    history.push('/login')
    return <h1>Page Not Found</h1>
  } else {
    useEffect(() => {
      const token = localStorage.usertoken
      const decoded = jwt_decode(token)
      setFirstName(decoded.first_name)
    }, [])

    return (
      <div className="container pt-4" style={{ textAlign: 'center' }}>
        <h1 className="display-5 pt-4">Hello {firstName}!</h1>
        <h3 className="display-6 pt-3">AND WELCOME TO 724 WEATHER</h3>
        <div className="btn-group-vertical pt-2">
          <button
            className="btn btn-outline-dark  px-5 py-3 my-2"
            onClick={() => history.push('card/city')}
          >
            Cities
          </button>
          <button
            className="btn btn-outline-dark  px-5 py-3 my-2"
            onClick={() => history.push('card/weather')}
          >
            Weather
          </button>
          <button
            className="btn btn-outline-dark  px-5 py-3 my-2"
            onClick={() => history.push('card/users')}
          >
            Users
          </button>
          <button
            className="btn btn-outline-dark px-5 py-3 my-2"
            onClick={() => history.push('card/reports')}
          >
            Reports
          </button>
        </div>
      </div>
    )
  }
}

export default withRouter(Menu)
