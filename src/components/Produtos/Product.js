import React from 'react';
import CarrinhoRosa from '../../aseets/img/carrinho-amor.svg';
import Descricao from './Descricao';


const Produtos = ({ product, onAddToCart }) => {

    
    return (
        <>
        <div>
            <li className="produto">
                <img src={product.image.url} alt={product.name} className="produto__imagem"/>
                <div className="produto__conteudo">
                    <h3 className="titulo titulo--destaque">{product.name}
                        </h3>
                    <p className="produto__preco">{product.price.formatted_with_symbol}</p>
                    
                  
                </div>
                
                <div >
                     <Descricao product={product} />
                 </div>
             
                   <img src={CarrinhoRosa} alt="Carrinho rosa" className="produto__carrinho" onClick={() => onAddToCart(product.id, 1)} />
            </li>

        </div>

         
        </>
    )
}

export default Produtos
