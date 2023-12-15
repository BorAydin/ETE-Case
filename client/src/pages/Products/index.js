import { Card, Col, Row } from 'antd';
import React from 'react';

import ProductsTable from '../../components/Products/produtsTable';
import QueryFilters from '../../components/Products/queryFilters';
import './style.css';

const Products = () => {
  return (
    <Card>
      <Row>
        <Col sm={24}>
          <QueryFilters />
        </Col>
        <Col sm={24} style={{ height: '70vh' }}>
          <ProductsTable />
        </Col>
      </Row>
    </Card>
  );
};

export default Products;
