import ReactDom from 'react-dom';
import React, { useEffect, useState } from 'react';
import { memorizedFetchBundle } from 'lite-module-federation';
import './app.css';

const App: React.FC<{}> = () => {
  const [config, setConfig] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      const { config } = await memorizedFetchBundle(
        'http://localhost:7001/cdn/remoteEntry.js'
      );
      setConfig(config);

      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div>Loading sub-app.....</div>;
  }

  const PluginOne = config.componentOne;
  const PluginTwo = config.componentTwo;

  return (
    <div className="main-box">
      <div className="main-app">Main App</div>
      <div className="sub-app-wrapper">
        <PluginOne />
        <PluginTwo />
      </div>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById('app'));
