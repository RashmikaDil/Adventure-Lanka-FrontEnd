import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Auth/login';
import Home from './Home';
import Profile from './Auth/Profile';
import Register from './Auth/Register';
import DestinationView from './DestinationView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/auth' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/Profile' element={<Profile />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/destination' element={<DestinationView />} />
      <Route path="/destination/:destinationId" element={<DestinationView />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
