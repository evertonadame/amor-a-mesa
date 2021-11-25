import React, { useState } from 'react';
import RightNav from './RightNav';
import { StyledBurger } from './BurguerStyles';
import { Badge } from "@material-ui/core";
import './cabecalho.css';

const Burger = ({totalItems}) => {
  
  const [open, setOpen] = useState(false)
  
  
    
    return (
      <>
        
        <div className="badge--carrinho">
               
         <Badge badgeContent={totalItems} color="secondary" variant="dot"
        anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
        }}
         >
          </Badge>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
        
          <div />
          <div />
          <div />
        
        </StyledBurger>
        </div>
        

        <RightNav open={open} totalItems={totalItems}/>
      
      </>
    )
  }
  
  export default Burger;