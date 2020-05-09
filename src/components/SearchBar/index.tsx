import React, { KeyboardEvent, useState } from 'react';

import { useDevice } from '../../contexts/device';

const SearchBar: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const { navigate } = useDevice();

  function handleNavigate(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      navigate(value);
    }
  }

  return (
    <input
      placeholder="Type your url here"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyPress={handleNavigate}
      style={{
        height: 40,
        width: 500,
        fontSize: 20,
        color: '#fff',
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        border: '1px solid #eee',
      }}
    />
  );
};

export default SearchBar;
