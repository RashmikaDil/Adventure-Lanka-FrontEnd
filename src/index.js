import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Auth from './Auth/Auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Routes>
  <Route path='/' element={<App></App>}></Route>
  <Route path='/Auth' element={<Auth></Auth>}></Route>
</Routes>
</BrowserRouter>
);

reportWebVitals();
