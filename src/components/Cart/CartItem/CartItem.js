import React from 'react';

const CartItem = ({item, onUpdateCartQty, onRemove }) => {

   
    return (
        <div className="container produto carrinho-item">
            <img src={item.image.url} alt={item.name} className="carrinho_imagem"/>
            <div>
                <h2 className="titulo titulo--destaque">{item.name}</h2>
                <h2 className="titulo">{item.line_total.formatted_with_symbol}</h2>
            </div>
            <div>
                <div className="carrinho--quantidade">
                    <button className="botao--alternativo botao--quantidade" onClick={() => onUpdateCartQty(item.id, item.quantity -1)}>-</button>
                    <h2 className="titulo">{item.quantity}</h2>
                    <button className="botao--alternativo botao--quantidade" onClick={() => onUpdateCartQty(item.id, item.quantity +1)}>+</button>
                </div>
                <button className="botao botao--carrinho--remover" onClick={() => onRemove(item.id)}>Remover</button>
            </div>
        </div>
    )
}

export default CartItem;
