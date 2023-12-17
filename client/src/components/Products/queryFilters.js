import { Button, Col, Form, Input, InputNumber, Row } from 'antd';
import React from 'react';
import AddProductModal from './addProductModal';

const QueryFilters = ({ onSearch, loading }) => {
  const handleSubmit = (values) => {
    if (!values['name[in]']) delete values['name[in]'];
    if (!values['category[in]']) delete values['category[in]'];
    if (!values['productAmount[in]']) delete values['productAmount[in]'];
    if (!values['amountUnit[in]']) delete values['amountUnit[in]'];
    onSearch?.(values);
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit}>
      <Row gutter={10}>
        <Col sm={4}>
          <Form.Item label="Name" name="name[in]">
            <Input />
          </Form.Item>
        </Col>
        <Col sm={4}>
          <Form.Item label="Category" name="category[in]">
            <Input />
          </Form.Item>
        </Col>
        <Col sm={4}>
          <Form.Item label="Product Amount" name="productAmount[in]">
            <InputNumber style={{ width: '100%' }} min={1} />
          </Form.Item>
        </Col>
        <Col sm={4}>
          <Form.Item label="Amount Unit" name="amountUnit[in]">
            <InputNumber style={{ width: '100%' }} min={1} />
          </Form.Item>
        </Col>
        <Col sm={3}>
          <Form.Item>
            <Button
              style={{ marginTop: '30px' }}
              danger
              type="primary"
              htmlType="submit"
              loading={loading}
            >
              Search Product
            </Button>
          </Form.Item>
        </Col>
        <Col sm={4}>
          <AddProductModal refreshTable={onSearch} />
        </Col>
      </Row>
    </Form>
  );
};

export default QueryFilters;
