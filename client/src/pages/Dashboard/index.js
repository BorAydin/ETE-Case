import { Col, Row, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import CountCardWidget from '../../components/Dasboard/CountCardWidget';
import ListWidget from '../../components/Dasboard/ListWidget';
import { fetchCompaines } from '../../context/companies/CompaniesActions';
import { fetchProducts } from '../../context/products/ProductsActions';
import './style.css';
const Dashboard = () => {
  const [state, setState] = useState({
    compaines: [],
    products: [],
    loading: false,
    productCount: 0,
    companyCount: 0,
  });

  const getProducts = async () => {
    setState({ ...state, loading: true });
    try {
      const response = await fetchProducts();

      return {
        products: response.data.data,
        productCount: response.data.count,
      };
    } catch (error) {
      setState({ ...state, loading: false });
    }
  };

  const getCompanies = async () => {
    setState({ ...state, loading: true });
    try {
      const response = await fetchCompaines();

      return {
        compaines: response.data.data,
        companyCount: response.data.count,
      };
    } catch (error) {
      setState({ ...state, loading: false });
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    const companyData = await getCompanies();
    const productsData = await getProducts();
    console.log(companyData, productsData);

    setState({ ...state, ...companyData, ...productsData, loading: false });
  };

  console.log(state);
  return state.loading ? (
    <Spin loading={state.loading} />
  ) : (
    <>
      <Row gutter={10}>
        <Col sm={12}>
          <CountCardWidget title={'Company Count'} count={state.companyCount} />
        </Col>
        <Col sm={12}>
          <CountCardWidget title={'Product Count'} count={state.productCount} />
        </Col>
      </Row>
      <Row gutter={10} style={{ marginTop: '10px' }}>
        <Col sm={12}>
          <ListWidget
            title={'Last Added 3 Companies'}
            data={state.compaines.splice(0, 3)}
          />
        </Col>
        <Col sm={12}>
          <ListWidget
            title={'Last Added 3 Products'}
            data={state.products.splice(0, 3)}
          />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
