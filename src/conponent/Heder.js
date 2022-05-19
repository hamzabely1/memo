import React from 'react'
import { Link } from 'react-router-dom'




const Heder = () => {







  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <Link to={'/home'}>


        
        <li className="nav-item">
          <p className='nav-link active'>Accueil</p>
        </li>

     </Link> 
     
     <Link to={'/register'}>   
<li className="nav-item">
<p className='nav-link active'>Inscrition</p>
</li>

</Link>
 
      
<Link to={'/login'}>   
<li className="nav-item">
<p className='nav-link active'>Connexion</p>

</li>

</Link>
 
      
      
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Rechercher" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Rechercher</button>
      </form>
    </div>
  </div>
</nav>



    </div>
  )
}

export default Heder