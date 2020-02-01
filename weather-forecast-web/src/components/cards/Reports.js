import React, { useEffect, useState } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getReports } from '../../redux/actionCreator/reportAction'

const Report = () => {
  const reports = useSelector(state => state.reportReducer.reports)

  const history = useHistory()
  const dispatch = useDispatch()

  if (localStorage.getItem('usertoken') === null) {
    history.push('/login')
    return <h1>Page Not Found</h1>
  } else {
    useEffect(() => {
      dispatch(getReports())
    }, [])

    return (
      <div>
        <div className="container pb-4">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">User Id</th>
                <th scope="col">Status</th>
                <th scope="col">Date</th>
                <th scope="col">Location Id</th>
                <th scope="col">User Ip Adress</th>
                <th scope="col">Duration</th>
                <th scope="col">Result</th>
              </tr>
            </thead>
            <tbody>
              {reports &&
                reports.map((report, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{report.user_id}</td>
                    <td>{report.status}</td>
                    <td>{report.date}</td>
                    <td>{report.location_id}</td>
                    <td>{report.user_ip}</td>
                    <td>{report.duration}</td>
                    <td>{report.result}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default withRouter(Report)
