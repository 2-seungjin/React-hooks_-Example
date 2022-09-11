import React from 'react';
import { Header } from 'antd/es/layout/layout'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button } from 'antd'


const MainHeader = ({collapsed,onClick}) => {

  return (
      <Header
        className="site-layout-background header"
      >
        <Button
          type={collapsed ? 'primary' : 'danger'}
          className='menuToggleBtn'
          onClick={onClick}
          ghost
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </Header>
  );
};

export default MainHeader;
