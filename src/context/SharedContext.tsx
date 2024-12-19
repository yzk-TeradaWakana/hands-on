import React, { createContext, useState, useContext } from 'react';

interface SharedState {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}

const SharedContext = createContext<SharedState | undefined>(undefined);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SharedProvider: React.FC<any> = ({ children }) => {
  const [isOpen, setOpen] = useState<boolean>(true);

  return (
    <SharedContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </SharedContext.Provider>
  );
};

export const useSharedContext = () => {
  const context = useContext(SharedContext);
  if (!context) {
    throw new Error('useSharedContext must be used within a SharedProvider');
  }
  return context;
};