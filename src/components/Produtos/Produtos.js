import React from 'react';
import './produto.css';
import Product from './Product';




const Produtos =  ({ products, onAddToCart }) => {

    
    return (

        <section className="container">
        <h2 className="titulo alinhamento--meio">Conheça nossos<span className="titulo--destaque">
            produtos
        </span></h2>
            {products.map((product) => (
        <ul key={product.id}> 
                <Product product={product}  onAddToCart={onAddToCart} />
         </ul>
     ))} 
    </section>

    );
}

export default Produtos;