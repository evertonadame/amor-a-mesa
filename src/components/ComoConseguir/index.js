import React from 'react'
import './cartao.css';
import './comoconseguir.css';
import './item.css';

const ComoConseguir = () => {
    return (
        <section className="container como-conseguir">
        <article className="cartao">
            <h2 className="titulo alinhamento--meio">
              Como comprar
              <span className="titulo--destaque">no amor a mesa</span>
            </h2>
            <ul className="lista-item">
              <li className="item">
                <span className="item__icone item__icone--cursor"></span>
                <p>Escolha seus produtos</p>
              </li>
              <li className="item">
                <span className="item__icone item__icone--carrinho"></span>
                <p>Faça seu pedido</p>
              </li>
              <li className="item">
                <span className="item__icone item__icone--caminhao"></span>
                <p>Aguarde na sua casa</p>
              </li>
            </ul>
          </article>
    </section>
    )
}

export default ComoConseguir;