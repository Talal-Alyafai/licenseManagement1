// import React, { useState } from 'react';
// import { useRequests } from '../context/RequestContext';

// const AdminDashboard = () => {
//   const { requests, updateRequestStatus } = useRequests();
//   const [justification, setJustification] = useState('');

//   const handleApproval = (id, status) => {
//     if (justification.trim() === '') {
//       alert('Please provide a justification.');
//       return;
//     }
//     updateRequestStatus(id, status, justification);
//     setJustification(''); // Clear the justification after submitting
//   };

//   return (
//     <div className="admin-dashboard">
//       <h2>Admin Dashboard</h2>
//       <ul>
//         {requests.map((request) => (
//           <li key={request.id}>
//             <p>Tool: {request.tool}</p>
//             <p>Reason: {request.reason}</p>
//             <p>Status: {request.status}</p>
//             <p>Justification: {request.justification}</p>
//             {request.status === 'Pending' && (
//               <div>
//                 <textarea
//                   placeholder="Provide justification here"
//                   value={justification}
//                   onChange={(e) => setJustification(e.target.value)}
//                 ></textarea>
//                 <button onClick={() => handleApproval(request.id, 'Approved')}>Approve</button>
//                 <button onClick={() => handleApproval(request.id, 'Denied')}>Deny</button>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminDashboard;
import React, { useState } from 'react';
import { useRequests } from '../context/RequestContext';

const AdminDashboard = () => {
  const { requests, updateRequestStatus } = useRequests();
  const [justifications, setJustifications] = useState({});

  const handleApproval = (id, status) => {
    const justification = justifications[id];
    if (!justification || justification.trim() === '') {
      alert('Please provide a justification.');
      return;
    }
    updateRequestStatus(id, status, justification);
    setJustifications((prev) => ({ ...prev, [id]: '' })); // Clear the justification after submitting
  };

  const handleJustificationChange = (id, value) => {
    setJustifications((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <ul>
        {requests.map((request) => (
          <li key={request.id}>
            <p>Tool: {request.tool}</p>
            <p>Reason: {request.reason}</p>
            <p>Status: {request.status}</p>
            <p>Justification: {request.justification}</p>
            {request.status === 'Pending' && (
              <div>
                <textarea
                  placeholder="Provide justification here"
                  value={justifications[request.id] || ''}
                  onChange={(e) => handleJustificationChange(request.id, e.target.value)}
                ></textarea>
                <button onClick={() => handleApproval(request.id, 'Approved')}>Approve</button>
                <button onClick={() => handleApproval(request.id, 'Denied')}>Deny</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
