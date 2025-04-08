import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../docs/octofitapp-small.png';

function AppWithLogo() {
  return (
    <div className="logo">
      <img src={logo} alt="OctoFit Logo" />
      <App />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWithLogo />
  </React.StrictMode>
);
