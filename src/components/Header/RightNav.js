import React from 'react';
import CarrinhoRosa from "../../aseets/img/carrinho-amor.svg";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./cabecalho.css";
import { Ul } from './BurguerStyles';



const RightNav = ({ open, totalItems }) => {
  return (
    <Ul open={open}>
     
      <Link to='/'><li className="titulo titulo--destaque">Principal</li></Link>
      <li className="titulo titulo--destaque">Contato</li>

        <li>
      <Link to="/carrinho" aria-label="Carrinho comprar" >
          <Badge badgeContent={totalItems} color="secondary">
            <img src={CarrinhoRosa} to='./cart' alt="Icones carrinho de compras" className="cabecalho__carrinho"/><h2 className="titulo titulo--destaque titulo-carrinho">Carrinho</h2>
          </Badge>
    </Link> 
    </li>
    </Ul>
  )
}

export default RightNav;