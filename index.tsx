import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TrapAlert } from './core/TrapAlert';

// Initialize TrapAlert
const ta = TrapAlert.init({
  tenantId: 'trapalert-demo-tenant',
  collectorEndpoint: 'https://api.trapalert.com/collect' // Dummy endpoint for demo
});

// Expose for demo
(window as any).trapAlert = ta;

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);