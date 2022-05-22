import React, { useEffect, useState } from 'react'

import Heder from '../conponent/Heder'

import axios from 'axios';
import { createBrowserHistory } from 'history';

const Login = () => {

const [username,setUsername] = useState('');
const [pass,setPass] = useState('');


const[msg,setMsg] =useState('');

const [user,setUser] =useState({

  email:'',
  password:'',

});



 
const {email,password} = user;
const onInputChange = e => {
  setUser({ ...user, [e.target.name]: e.target.value});
};



let history =createBrowserHistory();



const login_login =()=>{







const users = {user};


if(user.email === '')
       {
         alert('Email Field is empty')
       }
       else if(user.password === '')
       {
         alert('Pass Field is empty')
       }


axios.post('http://127.0.0.1:8000/api/login',user)
.then(responce=>{
  setMsg(responce.data);
  localStorage.setItem("users",responce.data);
  localStorage.setItem('users',responce.data);
history.push('/homeuser')

}) 







}








  const flex={
    display:'flex',
    justifyContent :'center'
     };
     const form={
       height:'300px',
       width:'300px',
       marginTop:"130px",
        };
  return (
    <div>

<Heder/>


<div style={flex}>


<form style={form}>

<h1>LOGIN</h1>


<br></br>
<label>Votre Email</label>

<input  onChange={(e)=>onInputChange(e)} value={email} name="email" className="form-control input-sm" type="text" placeholder="Email" aria-label="Repository description" />
<br></br>
<label>mots de passe</label>
<input  onChange={(e)=>onInputChange(e)} name="password" value={password}  className="form-control input-sm" type="text" placeholder="Mots de passe" aria-label="Repository description" />
<br></br>


<button  onClick={login_login} className="btn btn-dark" type="button">login</button>

</form>

 </div>
   </div>
  )
}

export default Login