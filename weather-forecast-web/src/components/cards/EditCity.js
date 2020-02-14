import React, { useEffect, useState } from 'react'

import { Link, useHistory, withRouter } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import {
  getCities,
  updateXCity,
  deleteXCity
} from '../../redux/actionCreator/cityAction'

const EditCity = props => {
  const [updateCity, setUpdateCity] = useState()
  const [deleteCity, setDeleteCity] = useState('')

  const cities = useSelector(state => state.cityReducer.cities)

  const pathname = parseInt(props.location.pathname.substr(16))

  const history = useHistory(false)
  const dispatch = useDispatch()

  const onSubmit = event => {
    event.preventDefault()
    dispatch(updateXCity({ id: pathname, name: updateCity }))
    alert(`City with id ${pathname} succesfully updated`)
    history.push('/card/city')
  }

  if (!updateCity && cities) {
    const data = cities.filter(city => city.id === pathname)[0]
    setUpdateCity(data.name)
  }

  if (localStorage.getItem('usertoken') === null) {
    history.push('/login')
    return <h1>Page Not Found</h1>
  } else {
    useEffect(() => {
      dispatch(getCities())
      if (deleteCity) {
        dispatch(deleteXCity(deleteCity))
        setDeleteCity('')
        const a = cities.filter(city => city.id === pathname)
        if (a) {
          history.push('/card/city')
        }
      }
    }, [deleteCity, pathname])

    return (
      <div className="container text-center pt-4 pb-5">
        <h1>Edit a City</h1>
        <form className="form" method="POST" onSubmit={onSubmit}>
          <label>
            ID
            <input
              type="text"
              className="form-control"
              value={pathname}
              disabled
            />
          </label>
          <label>
            Name
            <input
              type="text"
              className="form-control"
              value={updateCity ? updateCity : ' '}
              onChange={e => setUpdateCity(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit" className="btn btn-secondary  btn-lg">
            Edit a City
          </button>
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
                              'Are you sure you want to delete this city?'
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

export default withRouter(EditCity)
