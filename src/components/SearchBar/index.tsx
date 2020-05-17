import React, { KeyboardEvent, useState, useEffect } from 'react';
import Icon from 'react-fontawesome';

import { useNavigate } from '../../contexts/navigate';

const SearchBar: React.FC = () => {
  const { url, setUrl } = useNavigate();
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
      <Icon name="arrow-left" size="lg" style={{ color: '#ccc' }} />
      <Icon name="arrow-right" size="lg" style={{ color: '#ccc', margin: '0 10px' }} />
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
