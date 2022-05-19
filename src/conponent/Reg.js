
import React, {  useEffect, useState } from 'react'
import 'animate.css';
import { Link } from 'react-router-dom';
const Reg = () => {
  const [name,setNom] = useState('');
  const [prenom,setPrenom] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');


const profile = {name,email,password};



const envoi =() =>{

fetch('http://127.0.0.1:8000/api/register',
{
method:'POST',
headers:{
"Content-Type" : "application/json",
"accept" : "application/json"},
 body: JSON.stringify(profile)
})
.then(response => response.json)
.then(rep =>{
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



    
  <div style={flex}>
<form style={form}>

<h1>INSCRIPTION</h1>


<label>Nom</label>
<input value={name}  onChange={(e)=>{setNom(e.target.value)}}  className="form-control input-sm" type="text" placeholder="NOM" aria-label="Repository description" />
<br></br>
<label>Prénom</label>

<input value={prenom} onChange={(e)=>{setPrenom(e.target.value)}} className="form-control input-sm" type="text" placeholder="Prénom" aria-label="Repository description" />

<br></br>
<label>Votre Email</label>

<input value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control input-sm" type="text" placeholder="Email" aria-label="Repository description" />
<br></br>
<label>Créé votre mots de passe</label>

<input value={password} onChange={(e)=>{setPassword(e.target.value)}} className="form-control input-sm" type="text" placeholder="Mots de passe" aria-label="Repository description" />
<br></br>

<Link to={'login'}>
<button onClick={envoi} className="btn btn-dark" type="button">S'inscrire</button>
</Link>
</form>




</div>



   
  )
}

export default Reg