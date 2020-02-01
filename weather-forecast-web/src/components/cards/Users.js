import React, { useEffect, useState } from 'react'

import { Link, useHistory, withRouter } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import {
  getUsers,
  postNewUser,
  deleteXUser
} from '../../redux/actionCreator/userAction'

const Users = () => {
  const [newFirst, setNewFirst] = useState('')
  const [newLast, setNewLast] = useState('')
  const [newEmail, setNewEmail] = useState()
  const [newPassword, setNewPassword] = useState()
  const [render, setRender] = useState()
  const [deleteUser, setDeleteUser] = useState('')

  const users = useSelector(state => state.usersReducer.users)

  const history = useHistory()
  const dispatch = useDispatch()

  const onSubmit = event => {
    event.preventDefault()
    const newUser = {
      first_name: newFirst,
      last_name: newLast,
      email: newEmail,
      password: newPassword
    }
    dispatch(postNewUser(newUser))
    setNewEmail('')
    setNewFirst('')
    setNewLast('')
    setNewPassword('')
    setRender(true)
  }

  if (localStorage.getItem('usertoken') === null) {
    history.push('/login')
    return <h1>Page Not Found</h1>
  } else {
    useEffect(() => {
      if (deleteUser) {
        dispatch(deleteXUser(deleteUser))
        setDeleteUser('')
      }
      dispatch(getUsers())
      setRender(false)
    }, [render, deleteUser])
    return (
      <div className="container text-center pt-4 pb-5">
        <h1>Add New User</h1>
        <form method="POST" className="mx-auto" onSubmit={onSubmit}>
          <ul className="list-group mx-auto list-group-horizontal">
            <li className="list-group-item">
              <label>First Name:</label>
              <input
                type="text"
                value={newFirst}
                onChange={e => setNewFirst(e.target.value)}
                required
              />
            </li>
            <li className="list-group-item">
              <label>Last Name:</label>
              <input
                type="text"
                value={newLast}
                onChange={e => setNewLast(e.target.value)}
                required
              />
            </li>
            <li className="list-group-item">
              <label> Email:</label>
              <input
                type="email"
                value={newEmail}
                onChange={e => setNewEmail(e.target.value)}
                required
              />
            </li>
            <li className="list-group-item">
              <label>Password:</label>
              <input
                type="password"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                required
              />
            </li>
            <li className="list-group-item">
              <button type="submit" class="btn btn-secondary">
                Add User
              </button>
            </li>
          </ul>
        </form>

        <div className="container">
          <h1 style={{ textAlign: 'center', padding: '20px' }}>User List</h1>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">Email</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {users
                ? users.map((user, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{user.first_name}</td>
                      <td>{user.last_name}</td>
                      <td>{user.email}</td>
                      <td>
                        <Link to={`/card/user/edit/${user.user_id}`}>
                          <button disabled={index == 0}>Edit</button>
                        </Link>
                      </td>
                      <td>
                        <button
                          disabled={index == 0}
                          onClick={() =>
                            window.confirm(
                              'Are you sure you want to delete this user?'
                            ) && setDeleteUser(user.email)
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

export default withRouter(Users)
