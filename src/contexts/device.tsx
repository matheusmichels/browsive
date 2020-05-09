import React, { createContext, useState, useContext } from 'react';

interface DeviceContextData {
  navigate: (url: string) => void;
  url: string;
  zoom: number;
  invalidLink: boolean;
}

const DeviceContext = createContext<DeviceContextData>({} as DeviceContextData);

export const DeviceProvider: React.FC = ({ children }) => {
  const [url, setUrl] = useState<string>('https://matheusmichels.co/');
  const [zoom] = useState<number>(0.5);
  const [invalidLink] = useState<boolean>(false);

  return (
    <DeviceContext.Provider
      value={{ navigate: setUrl, url, invalidLink, zoom }}
    >
      {children}
    </DeviceContext.Provider>
  );
};

export function useDevice() {
  const context = useContext(DeviceContext);

  return context;
}
