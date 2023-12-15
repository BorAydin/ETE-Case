import {
  BuildOutlined,
  DashboardOutlined,
  ProfileOutlined,
} from '@ant-design/icons';

export const sidebarItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <DashboardOutlined />,
    href: '/dashboard',
  },
  {
    id: 'companies',
    label: 'Companies',
    icon: <BuildOutlined />,
    href: '/companies',
  },
  {
    id: 'products',
    label: 'Products',
    icon: <ProfileOutlined />,
    href: '/products',
  },
];
