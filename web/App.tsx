import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Layout } from '@/components/Layout';
import classes from '@/components/Layout/layout.module.css';

function App() {
  const [count, setCount] = useState(0);
  const a = 0;
  return (
    <Layout>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className={classes.isActive}>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Layout>
  );
}

export default App;
