import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Edit from './Components/Edit';
import RegisterForm from './Components/RegisterForm'
import RegisterList from './Components/RegisterList'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />

    <Routes>

      <Route path='/'  element={<RegisterList />} ></Route>
      <Route path='/create'  element={<RegisterForm />} ></Route>

      <Route path='update/:id' element={<Edit/>}></Route>
    </Routes>
  </BrowserRouter>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
