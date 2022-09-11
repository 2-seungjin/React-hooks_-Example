import React, { useState } from 'react';

const StateInputs = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <span style={{ marginRight: '20px' }}>
          name : <input type="text" value={name} onChange={onChangeName} />
        </span>
        <span>
          nickName :{' '}
          <input type="text" value={nickname} onChange={onChangeNickname} />
        </span>
      </div>
      <div>
        <div>
          <b>이름 : </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default StateInputs;
