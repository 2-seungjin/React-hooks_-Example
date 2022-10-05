import React, { useState } from 'react';
import { Form, Input } from 'antd';

const StateInputs = () => {
  const [name, setName] = useState({
    name: '',
    nickName: '',
  });
  const onChange = ({ target }) => {
    const { value, id } = target;
    setName({
      ...name,
      [id]: value,
    });
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 10 }}
        initialValues={{ remember: true }}
        autoComplete="off">
        <Form.Item
          label="Name"
          name="Name"
          rules={[{ required: true, message: 'Please input your Name!' }]}>
          <Input id={'name'} value={name.name} onChange={onChange} />
        </Form.Item>
        <Form.Item
          label="Nick Name"
          name="Nick Name"
          rules={[{ required: true, message: 'Please input your Nick Name!' }]}>
          <Input id={'nickName'} value={name.nickName} onChange={onChange} />
        </Form.Item>
      </Form>
      <div>
        <div>
          <b>이름 : </b> {name.name}
        </div>
        <div>
          <b>닉네임 : </b> {name.nickName}
        </div>
      </div>
    </div>
  );
};

export default StateInputs;
