import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory, withRouter } from 'react-router-dom'
import {
  getUsers,
  updateXUser,
  deleteXUser
} from '../../redux/actionCreator/userAction'

const EditUser = props => {
  const [updateUser, setUpdateUser] = useState()
  const [render, setRender] = useState()
  const users = useSelector(state => state.usersReducer.users)

  const [deleteUser, setDeleteUser] = useState('')

  const pathname = parseInt(props.location.pathname.substr(16))
  console.log(pathname)

  const history = useHistory(false)
  const dispatch = useDispatch()

  const onSubmit = event => {
    event.preventDefault()
    dispatch(updateXUser({ user_id: pathname, first_name: updateUser }))
    setRender(true)
    console.log(updateUser)
  }

  if (!updateUser && users) {
    const as = users.filter(y => y.user_id === pathname)[0]
  }

  if (localStorage.getItem('usertoken') === null) {
    history.push('/login')
    return <h1>Page Not Found</h1>
  } else {
    useEffect(() => {
      dispatch(getUsers())
      if (deleteUser) {
        dispatch(deleteXUser(deleteUser))
        const a = users.filter(y => y.user_id === pathname)
        if (!a) {
          history.push('/card/users')
        }
        setDeleteUser('')
      }
      setRender(false)
    }, [render, deleteUser])

    return (
      <div className="container text-center pt-4 pb-5">
        <h1>Edit User Info</h1>
        <form method="POST" onSubmit={onSubmit}>
          <label>
            ID
            <input type="text" value={pathname} disabled />
          </label>
          <br />
          <label>
            First Name
            <input
              type="text"
              value={updateUser ? updateUser.first_name : ' '}
              onChange={e => setUpdateUser(e.target.value)}
              required
            />
          </label>
          <label>
            Last Name
            <input
              type="text"
              value={updateUser ? updateUser.last_name : ' '}
              onChange={e => setUpdateUser(e.target.value)}
              required
            />
          </label>
          <label>
            Email
            <input
              type="text"
              value={updateUser ? updateUser.email : ' '}
              onChange={e => setUpdateUser(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit" className="btn btn-secondary  btn-lg">
            Edit a User
          </button>
        </form>
        <div className="container">
          <h1 style={{ textAlign: 'center', padding: '20px' }}>City List</h1>
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
                      <td>{user.user_id}</td>
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
                              'Are you sure you want to delete this city?'
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

export default withRouter(EditUser)
