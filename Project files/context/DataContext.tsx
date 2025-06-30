import React, { createContext, useContext, ReactNode } from 'react';

interface DataContextType {
  // Add data management methods here if needed
  refreshData: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const refreshData = () => {
    // Implement data refresh logic here
    console.log('Refreshing data...');
  };

  return (
    <DataContext.Provider value={{ refreshData }}>
      {children}
    </DataContext.Provider>
  );
};