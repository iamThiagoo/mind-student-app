'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type System = {

} | null;

type SystemContextType = {
  system: System;
  setSystem: (system: System) => void;
};

const SystemContext = createContext<SystemContextType | undefined>(undefined);

export const SystemProvider = ({ children }: { children: ReactNode }) => {
  const [system, setSystem] = useState<System>(() => {
    if (typeof window !== 'undefined') {
      const storedSystem = localStorage.getItem('system');
      return storedSystem ? JSON.parse(storedSystem) : null;
    }
    return null;
  });

  useEffect(() => {
    if (system) localStorage.setItem('system', JSON.stringify(system));
    else localStorage.removeItem('system');
  }, [system]);

  return (
    <SystemContext.Provider value={{ system, setSystem }}>
      {children}
    </SystemContext.Provider>
  );
};

export const useSystem = () => {
  const context = useContext(SystemContext);
  if (!context) {
    throw new Error('useSystem must be used within a SystemProvider');
  }
  return context;
};