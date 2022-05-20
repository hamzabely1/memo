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



      const insription=() =>{

        if (usersss == undefined) {
            return <Link to={"/register"}> <p className='nav-link active'>Register</p></Link>
            return <Link to={"/login"}> <p className='nav-link active'>login</p></Link>

          } else {

          }
            }

      
    
            const login=() =>{

              if (usersss == undefined) {
                  return <Link to={"/login"}> <p className='nav-link active'>login</p></Link>
      
                } else {
      
                }
                  }
                  
      const home=() =>{

        if (usersss == undefined) {
            return <Link to={"/home"}> <p className='nav-link active'>Acceuil</p></Link>
          
          } else {
            return <Link to={"/homeuser"}> <p className='nav-link active'>home</p></Link>

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




        {home()}
       
 
     

 
{insription()}
     {login()} 
      
       
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