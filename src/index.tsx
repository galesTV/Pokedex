<<<<<<< HEAD
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import AppRouter from './routes';
import './index.css';
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
>>>>>>> 6f391678c2f6057c59e7a8df686e4b0bd01640f4

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
<<<<<<< HEAD

root.render(
  <StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>
=======
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
>>>>>>> 6f391678c2f6057c59e7a8df686e4b0bd01640f4
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
