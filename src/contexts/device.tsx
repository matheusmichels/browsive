import React, { createContext, useState, useContext, useEffect } from 'react';

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

  useEffect(() => {
    // receives scroll events from webviews
    window.onmessage = (e: any) => console.log(e);
  }, []);

  return (
    <DeviceContext.Provider value={{ zoom, setZoom, scroll, setScroll }}>
      {children}
    </DeviceContext.Provider>
  );
};

export function useDevice() {
  const context = useContext(DeviceContext);
  return context;
}
