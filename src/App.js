import './App.css';
import { useEffect, useState } from 'react';

import {BrowserRouter,Routes,Route,} from 'react-router-dom'

import Home from './Home';
import Heder from './conponent/Heder';
import Login from './conexion/Login';
import Register from './conexion/Register';

  function App() {
    

const [items,setItems] = useState([])

useEffect(() =>{


fetch('http://127.0.0.1:8000/api/articles')
.then(response => response.json())
.then((result)=>{
  setItems(result)

console.log(result);

})

  },[])




  return (
    <div className="App">



<BrowserRouter>


<Routes>



<Route path='/login' element={<Login/>}/>
<Route path='/' element={<Home/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/home' element={<Home/>}/>

</Routes>


</BrowserRouter>

 


    </div>
  );
}

export default App;
