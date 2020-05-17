import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useDevice } from '../../contexts/device';

const Zoom: React.FC = () => {
  const { zoom, setZoom } = useDevice();

  return (
    <Slider
      min={0.2}
      max={0.8}
      step={0.02}
      defaultValue={zoom}
      onChange={e => setZoom(e)}
      style={{ width: 200 }}
    />
  );
};

export default Zoom;
