import React from 'react'
import { Link } from 'react-router-dom'




const Heder = () => {
  const usersss = localStorage.getItem('users');

  const log_out = () => {
    localStorage.removeItem("users")

  }


  const log = ()=>{

    if (usersss == undefined) {
    return <h1>hello</h1>

    } else {

      return <button onClick={log_out} className='btn btn-danger'> log out</button>

    }

    
      }
    



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
        {log()}
      </form>
    </div>
  </div>
</nav>



    </div>
  )
}

export default Heder