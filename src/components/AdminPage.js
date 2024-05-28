import React, { useState } from 'react';
import LicenseManagement from './LicenseManagement';
import RequestForm from './RequestForm';

const AdminPage = () => {
  const [aiLicenses, setAiLicenses] = useState([
    {
      id: 1,
      name: 'AWS Bedrock',
      description: 'AI tool provided by AWS for deep learning tasks.',
    },
    {
      id: 2,
      name: 'Microsoft Copilot',
      description: 'AI-powered code completion tool developed by Microsoft.',
    },
    // Add more AI licenses as needed
  ]);

  const handleAddLicense = (newLicense) => {
    setAiLicenses([...aiLicenses, newLicense]);
  };

  return (
    <div>
      <LicenseManagement onAddLicense={handleAddLicense} />
      <RequestForm aiLicenses={aiLicenses} />
    </div>
  );
};

export default AdminPage;
