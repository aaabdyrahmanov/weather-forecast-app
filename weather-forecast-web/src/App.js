import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Menu from './components/Menu'
import Footer from './components/Footer'

import City from './components/cards/City'
import Users from './components/cards/Users'
import Reports from './components/cards/Reports'
import Weather from './components/cards/Weather'

import EditCity from './components/cards/EditCity'
import EditUser from './components/cards/EditUser'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Route exact path="/" component={Menu} />
        <Route exact path="/dashboard" component={Menu} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/card/city" component={City} />
        <Route exact path="/card/weather" component={Weather} />
        <Route exact path="/card/reports" component={Reports} />
        <Route exact path="/card/users" component={Users} />
        <Route exact path="/card/city/edit/:id" component={EditCity} />
        <Route exact path="/card/user/edit/:id" component={EditUser} />

        <Footer />
      </div>
    </Router>
  )
}

export default App
