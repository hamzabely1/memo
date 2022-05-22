import React, {  useState } from 'react'
import Heder from './conponent/Heder'




const HomeUtilizateur = () => {
const usersss = localStorage.getItem('users');
const [budget,setbudget] = useState("");
const storebudget = localStorage.getItem('budget');



const [motive,setmotive] = useState("");
const [depence,setdeponce] = useState("");
const [jour,setjour] = useState("");


const aggachat ={motive,depence,jour}


const add = ()=>{
 localStorage.setItem('budget',budget);
}


const addachat=()=>{


localStorage.setItem('achatmotive',motive);
localStorage.setItem('achatdepence',depence);
localStorage.setItem('achatjour',jour);

}



const textmotive = localStorage.getItem('achatmotive')
const textdepence = localStorage.getItem('achatdepence')
const textjour = localStorage.getItem('achatjour')






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
<p>{usersss}</p>
<p>
  <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
   +
  </a>
  
</p>
<div className="collapse" id="collapseExample">
  <div className="card card-body">
    <input   value={budget} onChange={(e)=>{setbudget(e.target.value)}}></input>
    <button onClick={add}  className='btn btn-dark'>add</button>


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
<div className="tab-content" id="nav-tabContent">
  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">


  <div class="container-sm">


  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{textjour}</td>
      <td>{textdepence}</td>
      <td>{textmotive}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2"></td>
      <td></td>
    </tr>
  </tbody>
</table>




  </div>

  </div>
  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">

  <div class="container-sm">

<br></br>
<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-sm">motive</span>
  <input onChange={(e)=>{setmotive(e.target.value)}}  type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
</div>
<div class="input-group input-group-sm mb-3">
  <span  class="input-group-text" id="inputGroup-sizing-sm">depence </span>
  <input onChange={(e)=>{setdeponce(e.target.value)}}  type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
</div>
<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-sm">Fait le jour</span>
  <input onChange={(e)=>{setjour(e.target.value)}} type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
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