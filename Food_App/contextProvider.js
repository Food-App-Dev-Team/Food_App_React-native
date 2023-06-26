import React, { createContext, useState } from 'react';
import UserContext from './context.js'

const UserContextProvider = ({children}) => {
    const [login, setLogin] = useState(false);
  
    return (
      <UserContext.Provider value={{ login, setLogin }}>
        {children}
      </UserContext.Provider>
    );
  };
  
  export default UserContextProvider
  