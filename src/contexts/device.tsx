import React, { createContext, useState, useContext, useEffect } from 'react';

interface DeviceContextData {
  url: string;
  setUrl: (url: string) => void;
  zoom: number;
  setZoom: (zoom: number) => void;
  invalidLink: boolean;
}

const DeviceContext = createContext<DeviceContextData>({} as DeviceContextData);

export const DeviceProvider: React.FC = ({ children }) => {
  const [url, setUrl] = useState<string>('https://matheusmichels.co');
  const [zoom, setZoom] = useState<number>(0.5);
  const [invalidLink] = useState<boolean>(false);

  useEffect(() => {
    // receives scroll events from webviews
    window.onmessage = (e: any) => console.log(e);
  }, []);

  return (
    <DeviceContext.Provider value={{ url, setUrl, zoom, setZoom, invalidLink }}>
      {children}
    </DeviceContext.Provider>
  );
};

export function useDevice() {
  const context = useContext(DeviceContext);

  return context;
}
