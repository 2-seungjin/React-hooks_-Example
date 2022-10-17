import React, { useState } from 'react';

const TextInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (willUpdate) setValue(value);
    return { value, onChange };
  };

  return <div></div>;
};

export default TextInput;
