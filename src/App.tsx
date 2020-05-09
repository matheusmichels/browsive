import React from 'react';

import Main from './components/Main';
import { DeviceProvider } from './contexts/device';
import SearchBar from './components/SearchBar';

const App: React.FC = () => {
  return (
    <div style={{ padding: 10 }}>
      <DeviceProvider>
        <SearchBar />
        <Main />
      </DeviceProvider>
    </div>
  );
};

export default App;
