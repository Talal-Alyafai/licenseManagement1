import React from 'react';
import { useParams } from 'react-router-dom';
import { licenses } from '../data/fakeData';

const LicenseDetails = () => {
  const { id } = useParams();
  const license = licenses.find((lic) => lic.id === parseInt(id));

  return (
    <div>
      {license ? (
        <>
          <h1>{license.name}</h1>
          <p>{license.description}</p>
          <p>Provider: {license.provider}</p>
          <p>Availability: {license.availability}</p>
          <p>Contact: {license.contact}</p>
        </>
      ) : (
        <p>License not found</p>
      )}
    </div>
  );
};

export default LicenseDetails;
