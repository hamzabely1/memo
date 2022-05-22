import React from 'react'
import Heder from './conponent/Heder'
import 'animate.css';
import { useState } from 'react';


const Home = () => {

  
  const usersss = localStorage.getItem('users');

  const center = {
    display: 'flex',
    justifyContent: 'center'
  }

  const imi = {
    borderRadius: '10px',
    width: "500px"
  }

const im = {

  background:'url(../img/u.png)',

}


  return (

    <div>
      <Heder />

      <div className="container-sm">

        <br></br>
        <div className="card">

          <h1>La solution de gestion de dépenses que votre équipe mérite</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of</p>
          <p>{usersss}</p>
          <div style={center}>
            <img style={imi} className='rounded float-start' src='https://media.lesechos.com/api/v1/images/view/5e5647bd3e4546399c47e53e/1280x720/11756-1525686128-rgpd-utilisateur.jpg'></img>

          </div>
          <buttton className='btn btn-dark'>S'inscrire</buttton>
          <br></br>
          <img src='https://classe-export.com/wp-content/uploads/2021/11/e-commerce-nation.jpg' />
          <h3>nous</h3>
          <p >
          
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


            
            <img src='https://imagehost9.online-image-editor.com/oie_upload/images/OIE_2019NOV_62903217_74293086/1601259YqkThXgz.png'></img>
          </p>
          <div style={im}>

          </div>

          <div className="card-body">
          </div>
        </div>

      </div>

    </div>













  )
}

export default Home