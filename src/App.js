import './App.css';
import { useEffect, useState } from 'react';

import {BrowserRouter,Routes,Route,} from 'react-router-dom'

import Home from './Home';
import Login from './conexion/Login';
import Register from './conexion/Register';
import HomeUtilizateur from './HomeUtilizateur';

  function App() {
    








  return (
    <div className="App">



<BrowserRouter>


<Routes>



<Route path='/login' element={<Login/>}/>
<Route path='/' element={<Home/>}/>
<Route path='/register' element={<Register/>}/>
<Route path="/home" element={<Home/>}/>
<Route path='register/login' element={<Login/>}/>
<Route path='/homeuser' element={<HomeUtilizateur/>}/>

</Routes>


</BrowserRouter>

 


    </div>
  );
}

export default App;
