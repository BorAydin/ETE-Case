import { Card, List } from 'antd';
import moment from 'moment';
import React from 'react';

const ListWidget = ({ title, data }) => {
  return (
    <Card title={title}>
      <List
        size="large"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            {item.name} - {moment(item.createdAt).format('DD/MM/YYYY')}
          </List.Item>
        )}
      />
    </Card>
  );
};

export default ListWidget;
