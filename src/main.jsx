import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MyContextProvider } from '/MyContext';

import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </StrictMode>
);
