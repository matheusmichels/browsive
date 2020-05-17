import React from 'react';

import Device from '../../components/Device';
import SearchBar from '../../components/SearchBar';
import Zoom from '../../components/Zoom';

const Home: React.FC = () => {
  return (
    <div style={{ padding: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <SearchBar />
        <Zoom />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Device title="Desktop" dimensions={{ width: 1920, height: 1080 }} />
        <Device title="iPhone 5S" dimensions={{ width: 640, height: 1136 }} />
        <Device title="Desktop" dimensions={{ width: 1366, height: 768 }} />
        <Device title="Desktop" dimensions={{ width: 1024, height: 768 }} />
      </div>
    </div>
  );
};

export default Home;
