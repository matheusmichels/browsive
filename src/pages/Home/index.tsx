import React from 'react';

import Device from '../../components/Device';
import SearchBar from '../../components/SearchBar';
import Zoom from '../../components/Zoom';
import { UserAgents } from '../../utils/user-agents';

const Home: React.FC = () => {
  return (
    <div style={{ padding: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <SearchBar />
        <Zoom />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Device
          title="Desktop"
          userAgent={UserAgents.WINDOWS}
          dimensions={{ width: 1920, height: 1080 }}
        />
        <Device
          title="iPhone 5S"
          userAgent={UserAgents.IPHONE}
          dimensions={{ width: 640, height: 1136 }}
          mobile={true}
        />
        <Device
          title="Desktop"
          userAgent={UserAgents.WINDOWS}
          dimensions={{ width: 1366, height: 768 }}
        />
        <Device
          title="Desktop"
          userAgent={UserAgents.WINDOWS}
          dimensions={{ width: 1024, height: 768 }}
        />
      </div>
    </div>
  );
};

export default Home;
