import React from 'react';
import { Button, Result } from 'antd';

const NotFound = () => {
  return (
    <Result
      status="warning"
      title="NotFound."
      extra={
        <Button type="primary" key="console">
          Go Home
        </Button>
      }
    />
  );
};

export default NotFound;
