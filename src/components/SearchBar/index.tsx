import React, { KeyboardEvent, useState, useEffect } from 'react';
import Icon from 'react-fontawesome';

import { useDevice } from '../../contexts/device';

const SearchBar: React.FC = () => {
  const { url, setUrl } = useDevice();
  const [value, setValue] = useState<string>(url);

  useEffect(() => {
    setValue(url);
  }, [url]);

  function handleNavigate(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      setUrl(value);
    }
  }

  return (
    <div style={{ width: '100%' }}>
      <Icon name="arrow-left" style={{ color: '#fff', fontSize: 20, cursor: 'pointer' }} />
      <Icon
        name="arrow-right"
        style={{ color: '#fff', fontSize: 20, cursor: 'pointer', marginLeft: 10, marginRight: 10 }}
      />
      <input
        placeholder="Type your url here"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyPress={handleNavigate}
        style={{
          height: 40,
          width: '70%',
          fontSize: 20,
          color: '#fff',
          paddingLeft: 10,
          paddingRight: 10,
          borderBottom: '1px solid #eee',
        }}
      />
    </div>
  );
};

export default SearchBar;
