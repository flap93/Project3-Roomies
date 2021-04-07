import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

const ProfileExperience = ({
  experience: { location,  to, from, description }
}) => (
  <div>
    
    <p>
      {formatDate(from)} - {to ? formatDate(to) : 'Now'}
    </p>
    
    <p>
      <strong>Location: </strong> {location}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.object
};

export default ProfileExperience;