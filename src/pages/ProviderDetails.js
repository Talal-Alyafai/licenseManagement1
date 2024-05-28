import React from 'react';
import { useParams } from 'react-router-dom';
import { providers } from '../data/fakeData';

const ProviderDetails = () => {
  const { id } = useParams();
  const provider = providers.find((prov) => prov.id === parseInt(id));

  return (
    <div>
      {provider ? (
        <>
          <h1>{provider.name}</h1>
          <p>{provider.description}</p>
        </>
      ) : (
        <p>Provider not found</p>
      )}
    </div>
  );
};

export default ProviderDetails;
