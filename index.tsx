import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TrapAlert } from './core/TrapAlert';

// Initialize TrapAlert
const ta = TrapAlert.init({
  tenantId: 'v4rSPXU0Fi8wJZU9JwJsr9tuGEPfq_w11nyFlrJ8dGg',
  collectorEndpoint: 'https://trap-alert-dashboard.vercel.app/api'
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