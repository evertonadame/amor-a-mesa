import React from 'react';
import "./cabecalho.css";
import { Link } from "react-router-dom";

import Burguer from './Burguer';


const Header = ({totalItems}) => {





    return (

    <header className="cabecalho container">
        <Link to='/'><div  className="cabecalho__logo"></div></Link>
       
        <Burguer totalItems={totalItems} />
        
      </header>
    
    );
}

export default Header;
