import React from 'react';

import Device from '../../components/Device';
import SearchBar from '../../components/SearchBar';
import Zoom from '../../components/Zoom';
import { UserAgent } from '../../@types/user-agent.enum';

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
          userAgent={UserAgent.WINDOWS}
          dimensions={{ width: 1920, height: 1080 }}
        />
        <Device
          title="Desktop"
          userAgent={UserAgent.WINDOWS}
          dimensions={{ width: 1366, height: 768 }}
        />
        <Device
          title="Desktop"
          userAgent={UserAgent.WINDOWS}
          dimensions={{ width: 1024, height: 768 }}
        />
        <Device
          title="iPhone XS Max"
          userAgent={UserAgent.IPHONE}
          dimensions={{ width: 414, height: 896 }}
          mobile={true}
        />
      </div>
    </div>
  );
};

export default Home;
