import React, { Fragment, useState } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';

import { Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';




 const Login = ({ login}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const { name ,email, password} = formData;

const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
      e.preventDefault();
      login(email, password);
        
      };
    
      
      return (
        <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign Into Your Account
      </p>
      <form className="form" onSubmit={e => onSubmit (e)}>
        
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
            />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            required
            />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
    );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
 // isAuthenticated: PropTypes.bool
}

export default connect(null, { login })(Login)