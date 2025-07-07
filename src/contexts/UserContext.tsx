
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  userData: {
    name: string;
    userId: string;
  } | null;
  setUserData: (data: { name: string; userId: string } | null) => void;
}

const UserContext = createContext<UserContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  userData: null,
  setUserData: () => {},
});

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<{ name: string; userId: string } | null>(null);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
