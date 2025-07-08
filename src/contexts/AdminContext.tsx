
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AdminContextType {
  isAdminLoggedIn: boolean;
  setIsAdminLoggedIn: (value: boolean) => void;
  adminData: {
    name: string;
    email: string;
  } | null;
  setAdminData: (data: { name: string; email: string } | null) => void;
}

const AdminContext = createContext<AdminContextType>({
  isAdminLoggedIn: false,
  setIsAdminLoggedIn: () => {},
  adminData: null,
  setAdminData: () => {},
});

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminData, setAdminData] = useState<{ name: string; email: string } | null>(null);

  return (
    <AdminContext.Provider value={{ isAdminLoggedIn, setIsAdminLoggedIn, adminData, setAdminData }}>
      {children}
    </AdminContext.Provider>
  );
};
