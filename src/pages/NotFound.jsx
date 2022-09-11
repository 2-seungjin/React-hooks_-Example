import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Result
      status="warning"
      title="NotFound."
      extra={
        <Button type="primary" key="console" onClick={() => navigate('/')}>
          Go Home
        </Button>
      }
    />
  );
};

export default NotFound;
