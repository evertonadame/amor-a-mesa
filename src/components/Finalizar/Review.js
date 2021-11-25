import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';


const Review = ({ checkoutToken }) => {

    

    return (
        <>
            <h2 className="titulo titulo--destaque alinhamento--meio">Resumo do pedido</h2>
            <List>
                {checkoutToken.live.line_items.map((product) =>(
                   
                    <ListItem key={product.name}>
                        <ListItemText primary={product.name} secondary={`Quantidade: ${product.quantity}`} />
                        <Typography variant="body2">{product.line_total_formatted_with_symbol}</Typography>
                        <img className="image--resumo"src={product.image.url} alt={product.name}/>
                    </ListItem>
                ))}
                
                <ListItem>
                    <ListItemText primary="Total"/>
                    <Typography variant="subtitle1">
                        {checkoutToken.live.subtotal.formatted_with_symbol}
                    </Typography>
                </ListItem>
            </List>
        </>
    )
}

export default Review
