import React from 'react';

// lib
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Swal from 'sweetalert2';
import 'remixicon/fonts/remixicon.css'

// style
import './style/style.css'

// component
import { Navbar } from './component/navbar'
import { Footer } from './component/footer';


const App = function(use) {

  use = React.createRef();
  class grade{
    
    static level = { // SORUCE >>>  https://teen.mthai.com/app/uploads/2012/07/856-3839.jpg
      A: 'คุณได้เกรด 4.00 ',
      'B+': 'คุณได้เกรด 3.50',
      B: 'คุณได้เกรด 3.00',
      'C+': 'คุณได้เกรด 2.50',
      C: 'คุณได้เกรด 2.00',
      'D+': 'คุณได้เกรด 1.50',
      D: 'คุณได้เกรด 1.00',
      F: 'คุณได้เกรด 0'
    }};

  
  
  const Process = function(event , input) {

    event.preventDefault()
    input = use.current.value

    new Promise((resolve , reject)=>{
      if (input >= 80) {
      resolve(grade.level.A)

    } else if(input >=75 && input <= 79 ){
      resolve(grade.level['B+'])

    } else if (input >= 70 && input <= 74) {
      resolve(grade.level.B)

    }  else if (input >= 65 && input <= 69) {
      resolve(grade.level['C+'])

    } else if (input >= 60 && input <= 64) {
      resolve(grade.level.C)

    } else if(input >= 55 && input <= 59){
      resolve(grade.level['D+'])

    } else if(input >= 50 && input <= 54){
      resolve(grade.level.D)

    } else if(input >= 1 && input <= 49 ){
      resolve(grade.level.F)

    }  else if(!input || input.toString()){
      reject(false)

    }}

    ).then((resolve)=> {
      Swal.fire(
        'คำนวณเกรดของคุณเรียบร้อย!',
        resolve,
        'success'
      ).catch((reason)=> reason)
    })
};

  return (

    <React.Fragment>
      <Navbar/>
        <form>
          <div className="container">
            <div className="row">
              <div className="col-lg">
                <h2>โปรแกรมคำนวณเกรดเฉลี่ย</h2>
                    <input type="text" placeholder="โปรดใส่คะแนนของคุณ" ref={use}  /><br />
                    <button onClick={Process} className="btn btn-primary me-1">ยืนยัน</button>
                    <button type="reset" className="btn btn-danger ms-1">ยกเลิก</button>
                </div>
              </div>
            </div>
          </form>
        <Footer/>
    </React.Fragment>

  );
};

export default App;
