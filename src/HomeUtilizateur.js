import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Heder from './conponent/Heder'
import { createBrowserHistory } from 'history';
 let history = createBrowserHistory()


const HomeUtilizateur = () => {
const usersss = localStorage.getItem('users');

const storebudget = localStorage.getItem('budget')
const [budget,setbudget] = useState('')



const addbudget =()=>{

  localStorage.setItem('budget',budget)


}

const re =()=>{
    window.location.reload()
}


const [list,setlist] = useState({

  motive:"",
  depence:"",
  jour:""
});
const {motive,depence,jour} = list
const onInputChange = e => {
  setlist({ ...list, [e.target.name]: e.target.value });
};


  function addachat() {
   
    axios.post('http://127.0.0.1:8000/api/addlist', list);
    setlist({motive:"",depence:"",jour:""});
localStorage.setItem('depence',depence)

console.log(storebudget);
const depencer= localStorage.getItem('depence')
const total = storebudget - depencer;

localStorage.setItem('budget', total)

  }

const [lista,setlista]= useState([])

useEffect(()=>{
fetch('http://127.0.0.1:8000/api/list')
.then(responce => responce.json())
.then((rep)=>{
setlista(rep)
})
},[])






const rettangolo = {

height:'30px',
width:'90px',
border:'solid black 1px',
marginTop:'10px',
borderRadius:'5px',

}

const flex ={
  display:'flex',
  justifyContent:'center',
}






  return (
    <div>
<Heder/>



<div className="container-sm">

<br>
</br>
<br>
</br>
<br>
</br>


<p>
  <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
   +
  </a>
  
</p>
<p>
  <button onClick={re} className='btn btn-success'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
</svg></button>
  
</p>
<div className="collapse" id="collapseExample">
  <div className="card card-body">
    <input onChange={(e)=>{setbudget(e.target.value)}} ></input>
    <button onClick={addbudget} className='btn btn-dark'>add</button>


  </div>

  
</div>
<br></br>




    <br></br>

<div className="container px-4">
  <div className="row gx-5">
    <div className="col">
      
     <div className="p-3 border bg-light"><h1>{storebudget}$<span class="badge bg-secondary"></span></h1>
</div>
<nav>
  <div className="nav nav-tabs" id="nav-tab" role="tablist">
    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">history</button>
    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Agg achat</button>
 
  </div>
</nav>
<div  className="tab-content" id="nav-tabContent">

<div style={flex}>





<td>
{
lista.map((listas)=>{
return(
  <div className='text-end' style={rettangolo}>
<td>{listas.id}</td>
  </div>
)
})
}
</td>


<td>

  {

lista.map((listas)=>{
return(
<div style={rettangolo}>
  <td>-{listas.depence}</td>
</div>
)
})
  }
</td>

<td>
{
lista.map((listas)=>{
  return(
    <div style={rettangolo}>
<td>{listas.motive}</td>
    </div>
  )
  })
}
</td>

<td>
  {
lista.map((listas)=>{
return(
  <div style={rettangolo}>
  <td>{listas.jour}</td>
  </div>

)

})

  }


</td>







</div>



  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">

  <div class="container-sm">

<br></br>
<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-sm">motive</span>
  <input name='motive' value={motive} onChange={e=>onInputChange(e)}  type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
</div>
<div class="input-group input-group-sm mb-3">
  <span  class="input-group-text" id="inputGroup-sizing-sm">depence </span>
  <input name='depence'  value={depence} onChange={e=>onInputChange(e)}  type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
</div>
<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-sm">Fait le jour</span>
  <input name='jour' value={jour} onChange={e=>onInputChange(e)} type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
</div>

<button onClick={addachat} className='btn btn-dark'>engestre</button>
  </div>

  

  </div>

</div>
</div>
</div>
</div>







</div>






    </div>
  )
}

export default HomeUtilizateur