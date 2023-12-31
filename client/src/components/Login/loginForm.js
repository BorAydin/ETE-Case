import { Button, Col, Form, Input, Row, message } from 'antd';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { login } from '../../context/auth/AuthActions';
import AuthContext from '../../context/auth/AuthContext';
import { validateEmail } from '../../utils/form-validations/email';

const LoginForm = () => {
  const navigate = useNavigate();
  const { loading, dispatch } = useContext(AuthContext);

  console.log(useContext(AuthContext));
  const handleSubmit = async (values) => {
    dispatch({ type: 'SET_LOADING' });

    try {
      const response = await login(values);
      dispatch({
        type: 'SET_USER',
        payload: response.data,
      });

      navigate('/dashboard');
    } catch (error) {
      message.error(error.toString());
      dispatch({ type: 'SET_LOADING', payload: false });
    }
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
            <Button type="primary" htmlType="submit" loading={loading}>
              Login
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default LoginForm;
