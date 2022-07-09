import React from 'react';
import './test.css';
import { Card } from 'antd';

const Plugin: React.FC<{}> = () => {
  return (
    <Card
      style={{
        color: 'red',
        fontSize: '32px',
      }}
    >
      这个是远程导入的插件组件
    </Card>
  );
};

export default Plugin;
