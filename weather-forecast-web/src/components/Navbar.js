import React from 'react'

import { Link, useHistory, withRouter } from 'react-router-dom'

const Navbar = () => {
  const history = useHistory()

  const logOut = () => {
    localStorage.removeItem('usertoken')
    history.push('/')
  }

  const loginRegLink = () => {
    return (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link" href="#">
            <i className="fa fa-user-o"></i> Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link" href="#">
            Register
          </Link>
        </li>
      </ul>
    )
  }
  const userLink = () => {
    return (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="" onClick={logOut} className="nav-link">
            Logout
          </Link>
        </li>
      </ul>
    )
  }

  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-light shadow">
        <div className="container">
          <ul className="navbar-nav">
            <Link to="/" className="navbar-brand">
              724 Weather
            </Link>
          </ul>
          <div className="" id="navbarResponsive">
            {localStorage.usertoken ? userLink() : loginRegLink()}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default withRouter(Navbar)
