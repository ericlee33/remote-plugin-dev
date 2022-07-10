import React, { useEffect, useState } from 'react';
import { RemoteComponent } from '@paciolan/remote-component';

interface IPlatFormEntryProps {}

const PlatFormEntry: React.FC<IPlatFormEntryProps> = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(async () => {
      const rawRes = await fetch('http://localhost:7001/api/plugin_detail', {
        method: 'GET',
      });

      const res = await rawRes.json();

      const url = res.data.url;

      setLoading(false);
      setUrl(url);
    }, 1000);
  }, []);

  const HelloWorld = (props) => <RemoteComponent url={url} {...props} />;

  return (
    <div
      style={{
        border: '1px solid #666',
        height: '300px',
      }}
    >
      <div style={{ borderBottom: '1px solid #666' }}>主应用启动完毕</div>
      {loading ? <div>Loading，正在加载远程组件.....</div> : <HelloWorld />}
    </div>
  );
};

export default PlatFormEntry;
