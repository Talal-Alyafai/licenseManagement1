// import React, { createContext, useState, useContext } from 'react';

// const RequestContext = createContext();

// export const useRequests = () => useContext(RequestContext);

// export const RequestProvider = ({ children }) => {
//   const [requests, setRequests] = useState([]);

//   const addRequest = (request) => {
//     setRequests((prevRequests) => [...prevRequests, { ...request, id: Date.now(), status: 'Pending' }]);
//   };

//   const deleteRequest = (id) => {
//     setRequests(requests.filter(request => request.id !== id));
//   };
//   const updateRequestStatus = (id, status) => {
//     setRequests((prevRequests) =>
//       prevRequests.map((req) =>
//         req.id === id ? { ...req, status } : req
//       )
//     );
//   };

//   return (
//     <RequestContext.Provider value={{ requests, addRequest, deleteRequest ,updateRequestStatus }}>
//       {children}
//     </RequestContext.Provider>
//   );
// };
import React, { createContext, useContext, useState, useEffect } from 'react';

const RequestContext = createContext();

export const useRequests = () => useContext(RequestContext);

export const RequestProvider = ({ children }) => {
  const [requests, setRequests] = useState(() => {
    const savedRequests = localStorage.getItem('requests');
    return savedRequests ? JSON.parse(savedRequests) : [];
  });

  useEffect(() => {
    localStorage.setItem('requests', JSON.stringify(requests));
  }, [requests]);

  const addRequest = (newRequest) => {
    setRequests([...requests, { ...newRequest, id: Date.now() }]);
  };

  const deleteRequest = (id) => {
    setRequests(requests.filter(request => request.id !== id));
  };

  const updateRequestStatus = (id, status, justification) => {
    setRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === id ? { ...req, status, justification } : req
      )
    );
  };

  return (
    <RequestContext.Provider value={{ requests, addRequest, deleteRequest, updateRequestStatus }}>
      {children}
    </RequestContext.Provider>
  );
};
