// import react
import React from "react";

// import lib
import Swal from "sweetalert2";

// import img
import logo from '../img/logo.svg';

// import style
import '../style/style.css';
import { nav } from "../style/style";
const Navbar = () => {
    function react(){
      Swal.fire({
        title: 'React-project',
        text: 'โปรเจคนี้ทำเกี่ยวกับโปรแกรมคำนวณเกรด',
        imageUrl: logo,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image'
      })
    }

    return (
      <>
          <nav class="navbar navbar-expand navbar-dark bg-dark" onClick={react} style={nav}>
              <div class="container">
                <img src= {logo} width={'55px'} height= {'55px'} onClick={react} style={{cursor: 'pointer'}} />
                  <h3 className="navbar-brand mt-2" onClick={react} style={{cursor: 'pointer'}}>React-project</h3>
                      <div class="collapse navbar-collapse" id="navbarNavDropdown"></div>
              </div>
          </nav>
      </> 
    )
}

export default Navbar;