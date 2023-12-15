import { Card, Col, Row } from 'antd';
import React from 'react';
import CompanyTable from '../../components/Compaines/companyTable';
import QueryFilters from '../../components/Compaines/queryFilters';
import './style.css';

const Compaines = () => {
  return (
    <Card>
      <Row>
        <Col sm={24}>
          <QueryFilters />
        </Col>
        <Col sm={24} style={{ height: '70vh' }}>
          <CompanyTable />
        </Col>
      </Row>
    </Card>
  );
};

export default Compaines;
