import React,{useState} from 'react';

const State = () => {
  const [text, setText] = useState('');
  return (
    <div>
      <input type="text"/>
    </div>
  );
}

export default State;
