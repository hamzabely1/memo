import React from 'react'
import { Link } from 'react-router-dom'




const Heder = () => {







  return (
    <div>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <Link to={'/home'}>


        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>

     </Link> 
     
     <Link to={'/register'}>   
<li class="nav-item">
  <a class="nav-link active" aria-current="page" href="#">Register</a>
</li>

</Link>
 
      
<Link to={'/login'}>   
<li class="nav-item">
  <a class="nav-link active" aria-current="page" href="#">Login</a>
</li>

</Link>
 
      
      
       
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>



    </div>
  )
}

export default Heder