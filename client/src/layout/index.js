import { Avatar, Button, Layout, message } from 'antd';
import React, { useContext, useState } from 'react';
import Sidebar from './sidebar';

import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import { logout } from '../context/auth/AuthActions';
import AuthContext from '../context/auth/AuthContext';
import { getLocalStorageValue } from '../utils/localStorage';
import './style.css';
const { Content, Header } = Layout;

const AppLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const user = getLocalStorageValue('user');

  const handleLogut = async () => {
    try {
      await logout();

      dispatch({
        type: 'REMOVE_USER',
      });

      navigate('/login');
    } catch (error) {
      message.error(error.toString());
    }
  };
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <Header>
          <div>
            <span>{user?.name} Hoşgeldiniz.</span>
            <Avatar
              style={{ backgroundColor: '#87d068' }}
              icon={<UserOutlined />}
            />
            <Button onClick={handleLogut} ghost danger>
              Logout
            </Button>
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
