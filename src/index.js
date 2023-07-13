import React, { useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));


function RootComponent() {
  useEffect(() => {
    const rootDiv = document.getElementById('root');
    const childRootDiv = document.getElementById('child_root');

  });

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

root.render(<RootComponent />);