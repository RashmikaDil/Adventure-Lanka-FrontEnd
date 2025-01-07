import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from'react-router-dom';


import Login from './Auth/login';
import Home from './Home';
import Profile from './Auth/Profile';
import Register from './Auth/Register';
import DestinationView from './DestinationView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Routes>
  <Route path='/' element={<App></App>}></Route>
  <Route path='/auth' element={<Login></Login>}></Route>
  <Route path='/home' element={<Home></Home>}></Route>
  <Route path='/Profile' element={<Profile></Profile>}></Route>
  <Route path='/Register' element={<Register></Register>}></Route>
  <Route path='/destination' element={<DestinationView></DestinationView>}></Route>
</Routes>
</BrowserRouter>
);

reportWebVitals();
