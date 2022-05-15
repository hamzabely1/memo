import React from 'react'
import Heder from './conponent/Heder'
import 'animate.css';

const Home = () => {

const oo ={
  marginTop:'180px',

width:"400px"
}
const body ={
  backgroundImage:'url(https://images6.alphacoders.com/407/thumb-1920-407234.jpg)'



}


  return (
    <div style={body}>
<Heder/>

<div style={oo} class="container-fluid">

  <h1>Nous</h1>
<div  class="card bg-dark text-white ">
  <div class="card-body">
  Why do we use it?
  Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
<div class="border color-border-default p-2 rounded mb-2">.color-border-default</div>



  </div>


 
</div>
</div>


    </div>
  )
}

export default Home