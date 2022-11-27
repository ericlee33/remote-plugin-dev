import React from 'react';
import './test.css';

const PluginOne: React.FC<{}> = () => {
  return <div className="sub-app-box">plugin-1</div>;
};
const PluginTwo: React.FC<{}> = () => {
  return <div className="sub-app-box">plugin-2</div>;
};

export const config = {
  componentOne: PluginOne,
  componentTwo: PluginTwo,
};
