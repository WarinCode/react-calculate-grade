// import react
import React, { Fragment } from 'react';

// import style
import './style/style.css';

// import lib
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'remixicon/fonts/remixicon.css';

// import component(default)
import Navbar  from './component/navbar';
import Footer  from './component/footer';
import Form from './component/form';

const App = function() {
  return (
    <Fragment>
      <Navbar/>
        <Form/>
        <Footer/>
    </Fragment>
  )
}

export default App;
