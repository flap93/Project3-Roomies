import React from 'react'

export const landing = () => {
    return (
        <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Find your perfect roomate</h1>
            <p className="lead">
              Connect with other people that is looking for a roomate 
            </p>
            <div className="buttons">
              <a href="register.html" className="btn btn-primary">Sign Up</a>
              <a href="login.html" className="btn btn-light">Login</a>
            </div>
          </div>
        </div>
      </section>
    )
}


export default landing;