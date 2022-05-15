import React from 'react'
import Heder from './conponent/Heder'
import 'animate.css';
import { useState } from 'react';


const Home = () => {



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
    })
    
    }
    
    



const flex ={
display:'flex',
}
const pp ={
  height:'300px'
  }
  const imi ={
   borderRadius:'10px',
   height:'300px'
    }
  


  return (
    
    <div>
<Heder/>

<div class="container-sm">100% wide until small breakpoint



<div class="card">

 

<h1>La solution de gestion de dépenses que votre équipe mérite</h1>


<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of</p>


<div style={flex}>

<img style={imi} src='https://imagehost9.online-image-editor.com/oie_upload/images/15221655w722VD2c1r/transparent.png'></img>






<form className='formi'>
  
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

<br></br>



<img src='https://classe-export.com/wp-content/uploads/2021/11/e-commerce-nation.jpg'/>
<h3>nous</h3>
<p>


Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.




<img src='https://imagehost9.online-image-editor.com/oie_upload/images/OIE_2019NOV_62903217_74293086/1601259YqkThXgz.png'></img>
</p>

  <div class="card-body">
  </div>
</div>

</div>

</div>













  )
}

export default Home