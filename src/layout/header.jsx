import React from 'react';
import { Header } from 'antd/es/layout/layout'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'


const MainHeader = ({collapsed,setCollapsed}) => {

  return (
      <Header
        className="site-layout-background"
        style={{
          padding: 0,
        }}
      >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: () => {
            setCollapsed( !collapsed )
          },
        })}
      </Header>
  );
};

export default MainHeader;
