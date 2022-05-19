import React, { useEffect, useState } from 'react'

import Heder from '../conponent/Heder'


const Login = () => {

const [email,setEmail] = useState('');
const [password,setPassword] = useState('');


const login ={email,password};

const login_login =()=>{



fetch('http://127.0.0.1:8000/api/login',

{
  method:'POST',
  headers:{
  "Content-Type" : "application/json",
  "accept" : "application/json"},
   body: JSON.stringify(login)
  })

.then(res => res.json)
.then(rep =>{

  console.log(rep);


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

<input  onChange={(e)=>setEmail(e.target.value)} className="form-control input-sm" type="text" placeholder="Email" aria-label="Repository description" />
<br></br>
<label>mots de passe</label>
<input  onChange={(e)=>setPassword(e.target.value)} className="form-control input-sm" type="text" placeholder="Mots de passe" aria-label="Repository description" />
<br></br>

<button  onClick={login_login} className="btn btn-dark" type="button">login</button>

</form>

 </div>
   </div>
  )
}

export default Login