import React, { useState } from 'react';

const LicenseManagement = ({ onAddLicense }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate input fields

    // Add new license
    onAddLicense({ id: Math.random(), name, description }); // Assign a random ID here

    // Clear form fields
    setName('');
    setDescription('');
  };

  return (
    <div>
      <h2>Add New License</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <button type="submit">Add License</button>
      </form>
    </div>
  );
};

export default LicenseManagement;
