import React, { createContext, useState, useContext } from 'react';

interface DeviceContextData {
  zoom: number;
  setZoom: (zoom: number) => void;
  scroll: number;
  setScroll: (scroll: number) => void;
}

const DeviceContext = createContext<DeviceContextData>({} as DeviceContextData);

export const DeviceProvider: React.FC = ({ children }) => {
  const [zoom, setZoom] = useState<number>(0.5);
  const [scroll, setScroll] = useState<number>(0);

  return (
    <DeviceContext.Provider value={{ zoom, setZoom, scroll, setScroll }}>
      {children}
    </DeviceContext.Provider>
  );
};

export function useDevice(): DeviceContextData {
  const context = useContext(DeviceContext);
  return context;
}
