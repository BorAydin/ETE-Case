import { Layout, Menu } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { sidebarItems } from '../constants/sidebar-items';

const { Sider } = Layout;

const Sidebar = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();

  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="panel-name">
          <img
            alt="brand logo"
            src="https://media.licdn.com/dms/image/C4D0BAQENl4-POU9NEw/company-logo_200_200/0/1676961985791/etesolutions_logo?e=1710979200&v=beta&t=ioXJMCW1yM2Huz5RrMxnxy6TuZFZOON8Fh__wOH_AtY"
          />
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {sidebarItems.map((item) => (
            <Menu.Item key={item.id} onClick={() => navigate(item.href)}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    </>
  );
};

export default Sidebar;
