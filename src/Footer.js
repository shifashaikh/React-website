import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import copywrite from "./images/copywrite.png";
import "./Footer.css"

const Footer=()=>{
    
    const year = new Date().getFullYear(); 
    
    return (
<>
<footer className="Footer">
<p>CopyWrite © {year}</p>

</footer>

</>
);}


export default Footer;