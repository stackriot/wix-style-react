import React, { useState } from 'react';
import { focusStorySettings as storySettings } from '../storySettings';
import { InputWithOptions } from 'wix-style-react';

const options = [{ id: '0', value: 'First Option' }];

const TestFocus = () => {
  const [value, setValue] = useState('');
  const [selectedId, setSelectedId] = useState(-1);

  const onChange = event => setValue(event.target.value);
  const onSelect = option => {
    setValue(option.value);
    setSelectedId(option.id);
  };

  return (
    <InputWithOptions
      options={options}
      selectedId={selectedId}
      value={value}
      onChange={onChange}
      onSelect={onSelect}
      dataHook={storySettings.dataHook}
    />
  );
};

export default TestFocus;
