import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Certifique-se de usar o nome correto do componente
import "./assets/App.module.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);