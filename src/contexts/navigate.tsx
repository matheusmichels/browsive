import React, { createContext, useState, useContext } from 'react';

interface NavigateContextData {
  url: string;
  setUrl: (url: string) => void;
}

const NavigateContext = createContext<NavigateContextData>({} as NavigateContextData);

export const NavigateProvider: React.FC = ({ children }) => {
  const [url, setUrl] = useState<string>('https://matheusmichels.co');

  return <NavigateContext.Provider value={{ url, setUrl }}>{children}</NavigateContext.Provider>;
};

export function useNavigate(): NavigateContextData {
  const context = useContext(NavigateContext);
  return context;
}
