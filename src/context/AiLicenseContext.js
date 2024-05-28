// AiLicenseContext.js
import React, { createContext, useContext, useState } from 'react';

const AiLicenseContext = createContext();

export const useAiLicenses = () => useContext(AiLicenseContext);

export const AiLicenseProvider = ({ children }) => {
  const [aiLicenses, setAiLicenses] = useState([]);

  const addLicense = (newLicense) => {
    setAiLicenses([...aiLicenses, newLicense]);
  };

  const updateLicense = (id, updatedLicense) => {
    const updatedLicenses = aiLicenses.map((license) =>
      license.id === id ? { ...license, ...updatedLicense } : license
    );
    setAiLicenses(updatedLicenses);
  };

  const deleteLicense = (id) => {
    const updatedLicenses = aiLicenses.filter((license) => license.id !== id);
    setAiLicenses(updatedLicenses);
  };

  return (
    <AiLicenseContext.Provider value={{ aiLicenses, addLicense, updateLicense, deleteLicense }}>
      {children}
    </AiLicenseContext.Provider>
  );
};
