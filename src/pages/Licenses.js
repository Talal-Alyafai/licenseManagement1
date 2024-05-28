import React from 'react';
import { Link } from 'react-router-dom';
import { licenses } from '../data/fakeData';

const Licenses = () => {
  return (
    <div>
      <h1>AI Licenses</h1>
      <ul>
        {licenses.map((license) => (
          <li key={license.id}>
            <Link to={`/licenses/${license.id}`}>{license.name}</Link>
            <p>Provider: {license.provider}</p>
            <p>Availability: {license.availability}</p>
            <p>Contact: {license.contact}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Licenses;
