import React from 'react';

import Main from './components/Main';
import { DeviceProvider } from './contexts/device';
import SearchBar from './components/SearchBar';
import Zoom from './components/Zoom';

const App: React.FC = () => {
  return (
    <div style={{ padding: 10 }}>
      <DeviceProvider>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <SearchBar />
          <Zoom />
        </div>

        <Main />
      </DeviceProvider>
    </div>
  );
};

export default App;
