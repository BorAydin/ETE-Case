import { Button, Col, Form, Input, InputNumber, Row } from 'antd';
import React from 'react';

const QueryFilters = ({ onSearch, loading }) => {
  const handleSubmit = (values) => {
    if (!values['name[in]']) delete values['name[in]'];
    if (!values['country[in]']) delete values['country[in]'];
    if (!values['legalNumber[in]']) delete values['legalNumber[in]'];
    onSearch?.(values);
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit}>
      <Row gutter={10}>
        <Col sm={6}>
          <Form.Item label="Name" name="name[in]">
            <Input />
          </Form.Item>
        </Col>
        <Col sm={6}>
          <Form.Item label="Country" name="country[in]">
            <Input />
          </Form.Item>
        </Col>
        <Col sm={6}>
          <Form.Item label="Legal Number" name="legalNumber[in]">
            <InputNumber style={{ width: '100%' }} min={1} />
          </Form.Item>
        </Col>
        <Col sm={6}>
          <Form.Item>
            <Button
              style={{ marginTop: '30px' }}
              danger
              type="primary"
              htmlType="submit"
              loading={loading}
            >
              Search Company
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default QueryFilters;
