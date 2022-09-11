import { Layout } from 'antd';
import React, { useState } from 'react';
import Nav from './nav'
import MainHeader from './header'
import MainFooter from './footer'
const { Content } = Layout;


const MainLayout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Nav collapsed={collapsed} setCollapsed={setCollapsed}/>
      <Layout className="site-layout">
        <MainHeader  collapsed={collapsed} setCollapsed={setCollapsed}/>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          { children }
        </Content>
        <MainFooter />
      </Layout>
    </Layout>
  );
};

export default MainLayout