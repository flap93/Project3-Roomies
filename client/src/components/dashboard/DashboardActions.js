import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i /> Edit Profile
      </Link>
      <Link to='/add-experience' className='btn btn-light'>
        <i  /> Add Dates
      </Link>
      <Link to='/add-education' className='btn btn-light'>
        <i /> Add Education
      </Link>
    </div>
  );
};

export default DashboardActions;