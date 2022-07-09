import React, { useEffect, useState } from 'react';
import { RemoteComponent } from '@paciolan/remote-component';
import { Card } from 'antd';

const URL = 'http://localhost:9001/main.bundle.js';

interface IPlatFormEntryProps {}

const PlatFormEntry: React.FC<IPlatFormEntryProps> = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setUrl(URL);
    }, 1000);
  }, []);

  const HelloWorld = (props) => <RemoteComponent url={url} {...props} />;

  return (
    <Card title={'主应用'}>
      {loading ? <div>Loading.....</div> : <HelloWorld />}
    </Card>
  );
};

export default PlatFormEntry;
