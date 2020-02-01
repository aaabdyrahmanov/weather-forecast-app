import React, { Fragment } from 'react'

const Footer = () => {
  return (
    <Fragment>
      <footer
        style={{
          position: 'fixed',
          left: '0',
          bottom: '0px',
          width: '100%',
          backgroundColor: '#f8f9fa',
          textAlign: 'center'
        }}
      >
        <div className="footer-copyright text-center py-2">
          724 WEATHER © 2020
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer
