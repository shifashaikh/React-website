import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  reminder from "./images/reminder.png";

import "./Header.css";

const Header=()=>{return (

<>
<div className="header">
<img alt="image"  src={reminder} width='70' height='50'/>
<h1>Reminders</h1>
</div>

</>
);}


export default Header;