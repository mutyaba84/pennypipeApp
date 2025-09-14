import React, { createContext, useState } from 'react';

export const UserContext = createContext<any>(null);

export const UserProvider: React.FC<any> = ({ children }) => {
  const [user, setUser] = useState({
    id: 'user_a',
    name: 'Dennis Mut',
    email: 'dennis@example.com',
    walletBalance: 1000.0,
  });

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};