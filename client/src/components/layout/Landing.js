import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
            </div>
          </div>
        </div>
      </section>
    )
}


export default landing;