import React, { useEffect, useState } from 'react'

import { Link, useHistory, withRouter } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import {
  getCities,
  postNewCity,
  deleteXCity
} from '../../redux/actionCreator/cityAction'

const City = () => {
  const cities = useSelector(state => state.cityReducer.cities)
  const [newCity, setNewCity] = useState('')
  const [render, setRender] = useState()
  const [deleteCity, setDeleteCity] = useState('')

  const history = useHistory(false)
  const dispatch = useDispatch()

  const onSubmit = event => {
    event.preventDefault()
    dispatch(postNewCity(newCity))
    setNewCity('')
    setRender(true)
  }

  if (localStorage.getItem('usertoken') === null) {
    history.push('/login')
    return <h1>Page Not Found</h1>
  } else {
    useEffect(() => {
      if (deleteCity) {
        dispatch(deleteXCity(deleteCity))
        setDeleteCity('')
      }
      dispatch(getCities())
      setRender(false)
    }, [render, deleteCity])
    return (
      <div className="container text-center pt-4 pb-5">
        <h1>Add a City</h1>
        <form className="form-inline" method="POST" onSubmit={onSubmit}>
          <div className="form-group center  mx-auto">
            <label className="font-weight-bold">City Name:</label>
            <input
              className="form-control"
              id="Name"
              type="text"
              value={newCity}
              onChange={e => setNewCity(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-secondary btn-lg">
              Add a City
            </button>
          </div>
        </form>

        <div className="container">
          <h1 style={{ textAlign: 'center', padding: '20px' }}>City List</h1>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Id</th>
                <th scope="col">City Name</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {cities
                ? cities.map((city, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{city.id}</td>
                      <td>{city.name}</td>
                      <td>
                        <Link to={`/card/city/edit/${city.id}`}>
                          <button>Edit</button>
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() =>
                            window.confirm(
                              `Are you sure you want to delete this ${city.name} from your list?`
                            ) && setDeleteCity(city.name)
                          }
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default withRouter(City)
