import React from 'react';

import { useDevice } from '../../contexts/device';

interface Props {
  title: string;
  dimensions: {
    width: number;
    height: number;
  };
}

const Device: React.FC<Props> = ({ title, dimensions }) => {
  const { url, zoom } = useDevice();

  const { width, height } = dimensions;

  return (
    <div
      style={{
        position: 'relative',
        width: width * zoom,
        height: height * zoom + 40,
        padding: '10px',
        userSelect: 'none',
      }}
    >
      <span style={{ fontSize: 20, color: '#ccc' }}>
        {`${title} - ${width}x${height}`}
      </span>
      <div
        style={{
          position: 'absolute',
          width,
          height,
          transform: `scale(${zoom})`,
          transformOrigin: 'left top',
          top: 40,
        }}
      >
        <iframe
          title={title}
          src={url}
          style={{
            width,
            height,
            borderRadius: 10,
            backgroundColor: '#fff',
            border: '2px solid #fff',
          }}
        />
      </div>
    </div>
  );
};

export default Device;
