import React from 'react';

import Device from '../Device';

const Main: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Device title="Desktop" dimensions={{ width: 1920, height: 1080 }} />
      <Device title="Desktop" dimensions={{ width: 1366, height: 768 }} />
      <Device title="Desktop" dimensions={{ width: 1024, height: 768 }} />
    </div>
  );
};

export default Main;
