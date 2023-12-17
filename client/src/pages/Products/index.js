import { Card, Col, Row, message } from 'antd';
import React, { useEffect, useState } from 'react';
import ProductsTable from '../../components/Products/productTable';
import QueryFilters from '../../components/Products/queryFilters';
import { fetchProducts } from '../../context/products/ProductsActions';
import './style.css';

const Products = () => {
  const [state, setState] = useState({
    products: [],
    loading: false,
    filters: {},
  });

  const getProducts = async (params) => {
    setState({ ...state, loading: true });
    try {
      const response = await fetchProducts(params);

      console.log(response.data);
      setState({ ...state, products: response.data.data, loading: false });
    } catch (error) {
      message.error(error.toString());
      setState({ ...state, loading: false });
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Card>
      <Row>
        <Col sm={24}>
          <QueryFilters
            onSearch={(values) => getProducts(values)}
            loading={state.loading}
          />
        </Col>
        <Col sm={24} style={{ height: '70vh' }}>
          <ProductsTable
            data={state.products}
            loading={state.loading}
            refreshTable={getProducts}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default Products;
