import React, { useState } from 'react';
import CodeBlocks from '../../components/CodeBlock';
import { Form, Input } from 'antd';

const StateInputs = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  const codeBlockText =
    'const StateInputs = () => {\n' +
    "  const [name, setName] = useState('');\n" +
    "  const [nickname, setNickname] = useState('');\n" +
    '\n' +
    '  const onChangeName = (e) => {\n' +
    '    setName(e.target.value);\n' +
    '  };\n' +
    '\n' +
    '  const onChangeNickname = (e) => {\n' +
    '    setNickname(e.target.value);\n' +
    '  };\n' +
    '\n' +
    '  return (\n' +
    '    <div>\n' +
    '      <div>\n' +
    '        <span>\n' +
    '          name : <input type="text" value={name} onChange={onChangeName} />\n' +
    '        </span>\n' +
    '        <span>\n' +
    '          nickName : <input type="text" value={nickname} onChange={onChangeNickname} />\n' +
    '        </span>\n' +
    '      </div>\n' +
    '      <div>\n' +
    '        <div>\n' +
    '          <b>이름 : </b> {name}\n' +
    '        </div>\n' +
    '        <div>\n' +
    '          <b>닉네임 : </b> {nickname}\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  );\n' +
    '};';
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 10 }}
        initialValues={{ remember: true }}
        autoComplete="off">
        <Form.Item
          label="Name"
          name="Name"
          rules={[{ required: true, message: 'Please input your Name!' }]}>
          <Input value={name} onChange={onChangeName} />
        </Form.Item>
        <Form.Item
          label="Nick Name"
          name="Nick Name"
          rules={[{ required: true, message: 'Please input your Nick Name!' }]}>
          <Input value={nickname} onChange={onChangeNickname} />
        </Form.Item>
      </Form>
      <div>
        <div>
          <b>이름 : </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickname}
        </div>
      </div>

      <CodeBlocks code={codeBlockText} />
    </div>
  );
};

export default StateInputs;
