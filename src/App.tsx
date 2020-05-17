import React from 'react';

import Home from './pages/Home';
import { DeviceProvider } from './contexts/device';
import { NavigateProvider } from './contexts/navigate';

const App: React.FC = () => {
  return (
    <NavigateProvider>
      <DeviceProvider>
        <Home />
      </DeviceProvider>
    </NavigateProvider>
  );
};

export default App;
