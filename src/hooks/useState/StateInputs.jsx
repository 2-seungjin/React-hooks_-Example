import React, { useState } from 'react';
import CodeBlocks from '../../components/CodeBlock';
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

  const codeBlockText =
    'const StateInputs = () => {\n' +
    '  const [name, setName] = useState({\n' +
    "    name: '',\n" +
    "    nickName: '',\n" +
    '  });\n' +
    '  const onChange = ({ target }) => {\n' +
    '    const { value, id } = target;\n' +
    '    setName({\n' +
    '      ...name,\n' +
    '      [id]: value,\n' +
    '    });\n' +
    '  };\n' +
    '\n' +
    "  const codeBlockText = '';\n" +
    '  return (\n' +
    '    <div>\n' +
    '      <Form\n' +
    '        name="basic"\n' +
    '        labelCol={{ span: 4 }}\n' +
    '        wrapperCol={{ span: 10 }}\n' +
    '        initialValues={{ remember: true }}\n' +
    '        autoComplete="off">\n' +
    '        <Form.Item\n' +
    '          label="Name"\n' +
    '          name="Name"\n' +
    "          rules={[{ required: true, message: 'Please input your Name!' }]}>\n" +
    "          <Input id={'name'} value={name.name} onChange={onChange} />\n" +
    '        </Form.Item>\n' +
    '        <Form.Item\n' +
    '          label="Nick Name"\n' +
    '          name="Nick Name"\n' +
    "          rules={[{ required: true, message: 'Please input your Nick Name!' }]}>\n" +
    "          <Input id={'nickName'} value={name.nickName} onChange={onChange} />\n" +
    '        </Form.Item>\n' +
    '      </Form>\n' +
    '      <div>\n' +
    '        <div>\n' +
    '          <b>이름 : </b> {name.name}\n' +
    '        </div>\n' +
    '        <div>\n' +
    '          <b>닉네임 : </b> {name.nickName}\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  );\n' +
    '};';
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

      <CodeBlocks code={codeBlockText} />
    </div>
  );
};

export default StateInputs;
