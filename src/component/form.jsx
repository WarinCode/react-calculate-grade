// import react
import React, { createRef } from "react";

// import lib
import  Swal  from "sweetalert2";

// import style
import { box , tagform , taginput } from "../style/style";

const Form = () => {
    let use = createRef();
    const grade = {
        level:{ 
          A: 'คุณได้เกรด 4.00 ',
          'B+': 'คุณได้เกรด 3.50',
          B: 'คุณได้เกรด 3.00',
          'C+': 'คุณได้เกรด 2.50',
          C: 'คุณได้เกรด 2.00',
          'D+': 'คุณได้เกรด 1.50',
          D: 'คุณได้เกรด 1.00',
          F: 'คุณได้เกรด 0'
        }}

      const Process = function(event , input) {
        event.preventDefault();
        input = use.current.value;
        Number(input)
        new Promise((resolve , reject)=>{
          if (input >= 80) {
          resolve(grade.level.A);

        } else if(input >=75 && input <= 79 ){
          resolve(grade.level['B+']);

        } else if (input >= 70 && input <= 74) {
          resolve(grade.level.B);
    
        }  else if (input >= 65 && input <= 69) {
          resolve(grade.level['C+']);
    
        } else if (input >= 60 && input <= 64) {
          resolve(grade.level.C);
    
        } else if(input >= 55 && input <= 59){
          resolve(grade.level['D+']);
    
        } else if(input >= 50 && input <= 54){
          resolve(grade.level.D);
    
        } else if(input >= 1 && input <= 49 ){
          resolve(grade.level.F);
  
        } else if(input!== ''|| !input){ //input === String 
          reject('โปรดใส่ข้อมูลให้ถูกต้อง!');
        }}
        ).then((resolve)=> {
          Swal.fire({
            icon:'success',
            title:'คำนวณเกรดของคุณเรียบร้อย!',
            html:`<h4 style="color: #16cf10;">${resolve}</h4>`,
          })}).catch((reason)=> {
            Swal.fire({   
              icon: 'error',
              title: 'Error',
              html: `<h4 style="color: #c91010;">${reason}</h4>`
            });
          });
    }

    return (
        <>
        <form style={tagform}>
          <section className="container" id="section">
            <div className="row">
              <div className="col-lg shadow-lg p-3 mb-5 bg-body rounded " style={box}>
                <h2>โปรแกรมคำนวณเกรดเฉลี่ย</h2>
                <div>
                    <input type="text" placeholder="โปรดใส่คะแนนของคุณ" ref={use} style={taginput} /><br />
                    <div className="btn-group m-3">
                        <button onClick={Process} className="btn btn-primary me-1">ยืนยัน</button>
                        <button type="reset" className="btn btn-danger ms-1">ยกเลิก</button>
                    </div>
                </div>
                </div>
              </div>
            </section>
          </form>
        </>
    )
}

export default Form;