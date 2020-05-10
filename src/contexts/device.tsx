import React, { createContext, useState, useContext } from 'react';

interface DeviceContextData {
  url: string;
  setUrl: (url: string) => void;
  zoom: number;
  setZoom: (zoom: number) => void;
  invalidLink: boolean;
}

const DeviceContext = createContext<DeviceContextData>({} as DeviceContextData);

export const DeviceProvider: React.FC = ({ children }) => {
  const [url, setUrl] = useState<string>('https://matheusmichels.co/');
  const [zoom, setZoom] = useState<number>(0.5);
  const [invalidLink] = useState<boolean>(false);

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
