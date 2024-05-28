// // UserRequestForm.js
// import React, { useState } from 'react';

// const UserRequestForm = ({ onSubmit }) => {
//   const [userRequest, setUserRequest] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(userRequest);
//     setUserRequest('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <textarea
//         value={userRequest}
//         onChange={(e) => setUserRequest(e.target.value)}
//         placeholder="Enter your request"
//         rows={4}
//         cols={50}
//         required
//       />
//       <button type="submit">Submit Request</button>
//     </form>
//   );
// };

// export default UserRequestForm;
