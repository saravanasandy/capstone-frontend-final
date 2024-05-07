import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import Header from './Components/Header';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <>
     <BrowserRouter>
     <div className ='container'>
      <Header/>
       <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
       </Routes>
    </div>
     </BrowserRouter>
     <ToastContainer/>
    </>
  );
}

export default App;
