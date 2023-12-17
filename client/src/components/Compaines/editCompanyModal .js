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
import { updateCompany } from '../../context/companies/CompaniesActions';
import { validateWebsite } from '../../utils/form-validations/email';
const EditCompanyModal = ({ company, refreshTable }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (values) => {
    try {
      await updateCompany(company.id, values);

      message.info('Company Updated');
      handleCancel();
    } catch (error) {
      message.error(error.response.data.error.toString());
    }
    refreshTable();
  };

  return (
    <>
      <a style={{ marginTop: '30px' }} type="primary" onClick={showModal}>
        Edit Company
      </a>
      <Modal
        title="Edit Company"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={company ? { ...company } : null}
        >
          <Row gutter={10}>
            <Col sm={24}>
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please input company name!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col sm={24}>
              <Form.Item
                label="Country"
                name="country"
                rules={[
                  {
                    required: true,
                    message: 'Please input company country!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col sm={24}>
              <Form.Item
                label="Website"
                name="website"
                rules={[
                  {
                    required: true,
                    message: 'Please input company website!',
                  },
                  { validator: validateWebsite },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col sm={24}>
              <Form.Item
                label="Legal Number"
                name="legalNumber"
                rules={[
                  {
                    required: true,
                    message: 'Please input company legal number!',
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
                  Edit Company
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default EditCompanyModal;
