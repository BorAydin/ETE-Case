import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  message,
} from 'antd';
import React, { useState } from 'react';
import { createProduct } from '../../context/products/ProductsActions';

const AddProductModal = ({ refreshTable }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (values) => {
    try {
      await createProduct(values);

      message.info('Product Created');
      handleCancel();
    } catch (error) {
      message.error(error.response.data.error.toString());
    }
    refreshTable();
  };
  return (
    <>
      <Button style={{ marginTop: '30px' }} type="primary" onClick={showModal}>
        Add Product
      </Button>
      <Modal
        title="Add Product"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form layout="vertical" onFinish={handleSubmit}>
          <Row gutter={10}>
            <Col sm={24}>
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please input product name!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col sm={24}>
              <Form.Item
                label="Category"
                name="category"
                rules={[
                  {
                    required: true,
                    message: 'Please input product category!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col sm={24}>
              <Form.Item
                label="Product Amount"
                name="productAmount"
                rules={[
                  {
                    required: true,
                    message: 'Please input product amount!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col sm={24}>
              <Form.Item
                label="Amount Unit"
                name="amountUnit"
                rules={[
                  {
                    required: true,
                    message: 'Please input product amount unit!',
                  },
                ]}
              >
                <InputNumber style={{ width: '100%' }} min={1} />
              </Form.Item>
            </Col>
            <Col sm={24}>
              <Form.Item>
                <Button
                  style={{ marginTop: '30px' }}
                  danger
                  type="primary"
                  htmlType="submit"
                  block
                >
                  Add Product
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default AddProductModal;
