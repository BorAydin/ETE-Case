import { Card, Col, Row, message } from 'antd';
import React, { useEffect, useState } from 'react';
import CompanyTable from '../../components/Compaines/companyTable';
import QueryFilters from '../../components/Compaines/queryFilters';
import { fetchCompaines } from '../../context/companies/CompaniesActions';
import './style.css';

const Compaines = () => {
  const [state, setState] = useState({
    compaines: [],
    loading: false,
    filters: {},
  });

  const getCompanies = async (params) => {
    setState({ ...state, loading: true });
    try {
      const response = await fetchCompaines(params);

      console.log(response.data);
      setState({ ...state, compaines: response.data.data, loading: false });
    } catch (error) {
      message.error(error.toString());
      setState({ ...state, loading: false });
    }
  };

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <Card>
      <Row>
        <Col sm={24}>
          <QueryFilters
            onSearch={(values) => getCompanies(values)}
            loading={state.loading}
          />
        </Col>
        <Col sm={24} style={{ height: '70vh' }}>
          <CompanyTable
            data={state.compaines}
            loading={state.loading}
            refreshTable={getCompanies}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default Compaines;
