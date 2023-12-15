import { Avatar, Layout } from 'antd';
import React, { useState } from 'react';
import Sidebar from './sidebar';

import { UserOutlined } from '@ant-design/icons';
import './style.css';
const { Content, Header } = Layout;

const AppLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <Header>
          <p>Admin Panel</p>
          <div>
            <span>Bora Aydın Hoşgeldiniz.</span>
            <Avatar
              style={{ backgroundColor: '#87d068' }}
              icon={<UserOutlined />}
            />
          </div>
        </Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default AppLayout;
