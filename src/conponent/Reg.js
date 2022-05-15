
import React, {  useEffect, useState } from 'react'

const Reg = () => {
  const [name,setNom] = useState('');
  const [prenom,setPrenom] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');


const profile = {name,email,password};



const envoi =() =>{



fetch('http://127.0.0.1:8000/api/registe',
{
method:'POST',
headers:{
"Content-Type" : "application/json",
"accept" : "application/json"},
 body: JSON.stringify(profile)
})
.then(response => response.json)
.then(rep =>{
 console.log(rep); 
})

}



const envois=()=>{
  console.log(profile);
}






const flex={
   display:'flex',
   justifyContent :'center'
    };
    const form={
      height:'300px',
      width:'300px',
      marginTop:"170px",
       };

  return (

  <div style={flex}>


<form style={form}>

<h1>Register</h1>


<label>nom</label>
<input value={name}  onChange={(e)=>{setNom(e.target.value)}}  class="form-control input-sm" type="text" placeholder="Nom" aria-label="Repository description" />
<br></br>
<label>prenom</label>

<input value={prenom} onChange={(e)=>{setPrenom(e.target.value)}} class="form-control input-sm" type="text" placeholder="Prenom" aria-label="Repository description" />

<br></br>
<label>Email</label>

<input value={email} onChange={(e)=>{setEmail(e.target.value)}} class="form-control input-sm" type="text" placeholder="Email" aria-label="Repository description" />
<br></br>
<label>Paswword</label>

<input value={password} onChange={(e)=>{setPassword(e.target.value)}} class="form-control input-sm" type="text" placeholder="Password" aria-label="Repository description" />
<br></br>

<button onClick={envoi} class="btn" type="button">Button</button>

</form>




</div>



   
  )
}

export default Reg