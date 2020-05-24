import React from 'react';

import { DeviceProvider } from './contexts/device';
import { NavigateProvider } from './contexts/navigate';
import Home from './pages/Home';

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
