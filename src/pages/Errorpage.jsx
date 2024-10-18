import React from 'react'

const Errorpage = () => {
  return (
     <div className="error-container">
      <h1 className="error-title">Oops!</h1>
      <p className="error-message">Something went wrong.</p>
      <p className="error-code">404</p>
      <a href="/" className="error-link">Go back to Home</a>
    </div>
  )
}

export default Errorpage
