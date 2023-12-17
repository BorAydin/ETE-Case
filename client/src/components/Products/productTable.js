import { Modal, Space, Table, message } from 'antd';
import React from 'react';
import { deleteProduct } from '../../context/products/ProductsActions';
import EditProductModal from './editProductModal ';

const ProductTable = ({ data, loading, refreshTable }) => {
  const handleDeleteProduct = async (id) => {
    try {
      Modal.confirm({
        title: 'Confirm',
        content: 'Are sure delete this product',
        onOk: async () => {
          await deleteProduct(id);
          message.info('Product Deleted');
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
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Product Amount',
      dataIndex: 'productAmount',
      key: 'productAmount',
    },
    {
      title: 'Amount Unit',
      dataIndex: 'amountUnit',
      key: 'amountUnit',
    },

    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <EditProductModal product={record} refreshTable={refreshTable} />
          <a onClick={() => handleDeleteProduct(record.id)}>Delete</a>
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
export default ProductTable;
