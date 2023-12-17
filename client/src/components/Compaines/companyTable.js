import { Modal, Space, Table, Tag, message } from 'antd';
import React from 'react';
import { deleteCompany } from '../../context/companies/CompaniesActions';
import EditCompanyModal from './editCompanyModal ';

const CompanyTable = ({ data, loading, refreshTable }) => {
  const handleDeleteCompany = async (id) => {
    try {
      Modal.confirm({
        title: 'Confirm',
        content: 'Are sure delete this company',
        onOk: async () => {
          await deleteCompany(id);
          message.info('Company Deleted');
          refreshTable();
        },
      });
    } catch (error) {
      message.error(error.response.data.error.toString());
    }
  };
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
          <EditCompanyModal company={record} refreshTable={refreshTable} />
          <a onClick={() => handleDeleteCompany(record.id)}>Delete</a>
        </Space>
      ),
    },
  ];

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
