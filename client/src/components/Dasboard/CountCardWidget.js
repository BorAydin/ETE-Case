import { Card, Typography } from 'antd';
import React from 'react';

const CountCardWidget = ({ title, count }) => {
  return (
    <Card title={title}>
      <Typography.Title>{count}</Typography.Title>
    </Card>
  );
};

export default CountCardWidget;
