import React from 'react';
import { Link } from 'react-router-dom';
import { providers } from '../data/fakeData';

const Providers = () => {
  return (
    <div>
      <h1>AI License Providers</h1>
      <ul>
        {providers.map((provider) => (
          <li key={provider.id}>
            <Link to={`/providers/${provider.id}`}>{provider.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Providers;
