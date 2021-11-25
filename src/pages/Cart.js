import React from 'react';
import CardItem from '../components/Cart/CartItem/CartItem';
import { Link } from "react-router-dom";


const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
 

    const EmptyCart = () => (

        <>
        <h2 className="titulo titulo--destaque carrinho-titulo alinhamento--meio">Carrinho vazio</h2>
        <Link to='/'><button className="botao">Adicionar produtos</button></Link>
        </>
    );

    if (!cart.line_items) return 'Loading';
    
    const FilledCart = () => (
        <>
            <div>
               <h2 className="titulo titulo--destaque carrinho-titulo alinhamento--meio">Meu carrinho</h2>
                {cart.line_items.map((item) => (
                    <div key={item.id}>
                        <CardItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemove={handleRemoveFromCart}/>
                    </div>
                ))}
            </div>
            <div>
                <h2 className="titulo">Total: {cart.subtotal.formatted_with_symbol}</h2>
                <div className="container container--carrinho--botao">
                    
                     <Link to='/finalizar'><button className="botao">Finalizar compra</button></Link>
                     <button className="botao--alternativo botao--carrinho" onClick={handleEmptyCart}>Esvaziar carrinho</button>
                </div>
            </div>
        </>

    );
    

    return (

     <div>
        <div className="container">
             { !cart.line_items.length ? EmptyCart():  FilledCart() }   
        </div>
    </div>
     
     
    )
}

export default Cart;