import { Space, Table, Tag } from 'antd';
import React from 'react';

const CompanyTable = ({ data, loading }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'LegalNumber',
      dataIndex: 'legalNumber',
      key: 'legalNumber',
    },
    {
      title: 'Products',
      key: 'products',
      dataIndex: 'products',
      render: (_, { products }) => (
        <>
          {products.map((tag) => {
            return (
              <Tag color={'purple'} key={tag}>
                {tag.name}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  console.log(data);

  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={loading}
      scroll={{
        y: '100%',
      }}
    />
  );
};
export default CompanyTable;
