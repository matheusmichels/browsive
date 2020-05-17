import React from 'react';

import Home from './pages/Home';
import { DeviceProvider } from './contexts/device';

const App: React.FC = () => {
  return (
    <DeviceProvider>
      <Home />
    </DeviceProvider>
  );
};

export default App;
