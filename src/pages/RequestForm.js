import React, { useState } from 'react';
import { useRequests } from '../context/RequestContext';
import { useAuth } from '../context/AuthContext';

const RequestForm = () => {
  const [selectedLicense, setSelectedLicense] = useState('');
  const [reason, setReason] = useState('');
  const { addRequest, deleteRequest, requests } = useRequests();
  const { user } = useAuth();

  const availableLicenses = ['AWS Bedrock', 'Microsoft Copilot', 'Other'];

  const handleSubmit = (e) => {
    e.preventDefault();
    addRequest({ tool: selectedLicense, reason, username: user.username, status: 'Pending', justification: '' });
    setSelectedLicense('');
    setReason('');
  };

  const handleDelete = (id) => {
    deleteRequest(id);
  };

  const userRequests = requests.filter(request => request.username === user.username);

  return (
    <div className="request-form">
      <h2>Request Access to AI Tool</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select License:</label>
          <select value={selectedLicense} onChange={(e) => setSelectedLicense(e.target.value)} required>
            <option value="">Select License</option>
            {availableLicenses.map((license, index) => (
              <option key={index} value={license}>{license}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Reason:</label>
          <textarea 
            value={reason} 
            onChange={(e) => setReason(e.target.value)} 
            required 
          ></textarea>
        </div>
        <button type="submit">Submit Request</button>
      </form>

      <h3>Your Requests</h3>
      <ul>
        {userRequests.map((request) => (
          <li key={request.id}>
            <p>Tool: {request.tool}</p>
            <p>Reason: {request.reason}</p>
            <p className={`status-${request.status.toLowerCase()}`}>Status: {request.status}</p>
            <p>Justification: {request.justification}</p>
            <button onClick={() => handleDelete(request.id)}>Delete Request</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RequestForm;
