import React, { useState } from 'react';

const ApprovalInterface = ({ userRequest, onApprove, onDeny }) => {
  const [justification, setJustification] = useState('');

  const handleApprove = () => {
    if (justification.trim() === '') {
      alert('Please provide a justification');
      return;
    }
    onApprove(justification);
  };

  const handleDeny = () => {
    if (justification.trim() === '') {
      alert('Please provide a justification');
      return;
    }
    onDeny(justification);
  };

  return (
    <div>
      <h3>Justification:</h3>
      <textarea
        value={justification}
        onChange={(e) => setJustification(e.target.value)}
        placeholder="Justification"
        rows={4}
        cols={50}
      />
      <h3>User Request:</h3>
      <p>{userRequest}</p>
      <div>
        <button onClick={handleApprove}>Approve</button>
        <button onClick={handleDeny}>Deny</button>
      </div>
    </div>
  );
};

export default ApprovalInterface;
