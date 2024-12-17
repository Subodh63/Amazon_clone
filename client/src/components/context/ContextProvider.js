// import React, { Children, createContext, useState} from "react";

// export const LoginContext = createContext(null);

// const ContextProvider = ( {Children}) => {
//     const [account, setAccount] = useState("");

//     return <>
//     <LoginContext.Provider value={{account, setAccount}}>
//         {Children}
//     </LoginContext.Provider>
//     </>;
// };

// export default ContextProvider;

// import React, { createContext, useState, useEffect } from 'react';

// // Create the context
// export const LoginContext = createContext();

// // Create the provider component
// const ContextProvider = ({ children }) => {
//   const [data, setData] = useState(null); // Data to be shared in context

//   useEffect(() => {
//     // If you're fetching data from a server, add the fetch logic here
//     // Example fetch from a dummy API:
//     fetch('https://jsonplaceholder.typicode.com/posts/1') // Replace with your API URL
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data); // Save fetched data to context state
//       })
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <LoginContext.Provider value={{ data, setData }}>
//       {children}
//     </LoginContext.Provider>
//   );
// };

// export default ContextProvider;

import React, { createContext, useState } from "react";

export const LoginContext = createContext();

const ContextProvider = ({ children }) => {
  const [account, setAccount] = useState({ cart: [] }); // Initialize state

  return (
    <LoginContext.Provider value={{ account, setAccount }}>
      {children}
    </LoginContext.Provider>
  );
};

export default ContextProvider;

