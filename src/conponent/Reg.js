
import React, {  useState } from 'react'
import 'animate.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


import { createBrowserHistory } from 'history';



const Reg = () => {

  const[errors,setErrors] = useState('');
  const [user, setUser] = useState({
      name: "",
      email: "",
      password:""
    });

    const {name, email,password} = user;
    const onInputChange = e => {
      setUser({...user, [e.target.name]: e.target.value });
    };


let history = createBrowserHistory();

const envoi =() =>{

  if(name == ''){
alert('choisissez un nom')
  }else if(email == ''){
alert('choisissez un email')
  }else if(password == ""){
    alert('choisissez un password')

  }else if(name != '' && email != '' && password != ''){


 axios.post("http://127.0.0.1:8000/api/register",user);
setErrors('Registration Successful')
setUser({name:"",email:"",password:""}) // To Clear all fields
history.push('login');


window.location.reload()
  }





  




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
<h3 style={{color:"green"}}>{errors}</h3>

<label>Nom</label>
<input name='name' value={name}  onChange={e => onInputChange(e)}  className="form-control input-sm" type="text" placeholder="NOM" aria-label="Repository description" />
<br></br>
<label>Prénom</label>

<input  className="form-control input-sm" type="text" placeholder="Prénom" aria-label="Repository description" />

<br></br>
<label>Votre Email</label>

<input name='email' value={email} onChange={e => onInputChange(e)} className="form-control input-sm" type="text" placeholder="Email" aria-label="Repository description" />
<br></br>
<label>Créé votre mots de passe</label>

<input name='password' value={password} onChange={e => onInputChange(e)} className="form-control input-sm" type="text" placeholder="Mots de passe" aria-label="Repository description" />
<br></br>




<button onClick={envoi} className="btn btn-dark" type="button">S'inscrire</button>

</form>




</div>



   
  )
}

export default Reg