import { Button, Col, Form, Input, Row } from 'antd';
import React from 'react';
import { validateEmail } from '../../utils/form-validations/email';

const LoginForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit}>
      <Row>
        <Col sm={24}>
          <Form.Item
            label="E-mail"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
              {
                validator: validateEmail,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col sm={24}>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Col>
        <Col sm={24}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default LoginForm;
