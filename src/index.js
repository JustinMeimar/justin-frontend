import React, { useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));


function RootComponent() {
  useEffect(() => {
    const rootDiv = document.getElementById('root');
    const childRootDiv = document.getElementById('child_root');

    if (rootDiv && childRootDiv) {
      const max_height = Math.max(rootDiv.offsetHeight, childRootDiv.offsetHeight);
      rootDiv.style.height = `${max_height}px`;
    } 
  });

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

root.render(<RootComponent />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
