import React from 'react';
import './test.css';

const Plugin: React.FC<{}> = () => {
  return (
    <div
      style={{
        color: 'red',
        fontSize: '32px',
      }}
    >
      这个是远程加载的插件组件
    </div>
  );
};

export default Plugin;
